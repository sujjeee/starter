"use server"

import { catchError } from "@/lib/errors"
import { generateCodeVerifier, generateState, Google } from "arctic"
import { db } from "@/db"
import { users } from "@/db/schemas"
import { magicLinks } from "@/db/schemas/magic-link"
import { emailSchema } from "@/lib/validations"
import { eq } from "drizzle-orm"
import { generateId } from "lucia"
import type { z } from "zod"
import jwt from "jsonwebtoken"
import { cache } from "react"
import { lucia } from "@/lib/lucia"
import { cookies } from "next/headers"
import { Resend } from "resend"
import { env } from "@/env"

export async function createGoogleAuthURL() {
  try {
    const state = generateState()
    const codeVerifier = generateCodeVerifier()

    cookies().set("google_oauth_state", state, {
      secure: process.env.NODE_ENV === "production",
      httpOnly: true,
      maxAge: 60 * 10,
    })

    cookies().set("google_code_verifier", codeVerifier, {
      secure: process.env.NODE_ENV === "production",
      httpOnly: true,
      maxAge: 60 * 10,
    })

    const google = new Google(
      env.GOOGLE_CLIENT_ID,
      env.GOOGLE_CLIENT_SECRET,
      `${env.NEXT_PUBLIC_APP_URL}/api/callbacks/google`
    )

    const authUrl = await google.createAuthorizationURL(state, codeVerifier, {
      scopes: ["email"],
    })

    authUrl.searchParams.append("prompt", "consent")

    return {
      data: authUrl.href,
      error: null,
    }
  } catch (error) {
    return catchError(error)
  }
}

export async function signInWithEmail(values: z.infer<typeof emailSchema>) {
  try {
    emailSchema.parse(values)

    const existedUser = await db.query.users.findFirst({
      where: eq(users.email, values.email),
    })

    if (existedUser) {
      const res = await generateMagicLink(values.email, existedUser.id)

      await db.insert(magicLinks).values({
        userId: existedUser.id,
        token: res.data.token,
      })

      await sendEmail(values.email, res.data.url)
    } else {
      // we will create the user
      const userId = generateId(15)

      await db.insert(users).values({
        email: values.email,
        id: userId,
      })

      const res = await generateMagicLink(values.email, userId)

      await db.insert(magicLinks).values({
        userId,
        token: res.data.token,
      })

      await sendEmail(values.email, res.data.url)
    }

    return {
      data: null,
      error: null,
    }
  } catch (error) {
    return catchError(error)
  }
}

export async function generateMagicLink(email: string, userId: string) {
  const token = jwt.sign({ email: email, userId }, env.JWT_SECRET, {
    expiresIn: "5m",
  })

  const url = `${process.env.NEXT_PUBLIC_APP_URL}/api/callbacks/email?token=${token}`

  return {
    success: true,
    message: "Magic link generated successfully",
    data: {
      token,
      url,
    },
  }
}

export async function sendEmail(email: string, url: string) {
  const resend = new Resend(process.env.RESEND_SECRET)

  const { error } = await resend.emails.send({
    from: "Starter <noreply@email.sujjeee.com>",
    to: [email],
    subject: "Magic Link",
    text: `Click the link to sign in: ${url}`,
    headers: {
      "X-Entity-Ref-ID": generateId(10),
    },
  })

  if (error) throw new Error(error.message)
}

export const getCurrentUser = cache(async () => {
  const sessionId = cookies().get(lucia.sessionCookieName)?.value ?? null
  if (!sessionId) return { user: null, session: null }

  const { user, session } = await lucia.validateSession(sessionId)

  try {
    if (session?.fresh) {
      const sessionCookie = lucia.createSessionCookie(session.id)
      cookies().set(
        sessionCookie.name,
        sessionCookie.value,
        sessionCookie.attributes
      )
    }
    if (!session) {
      const sessionCookie = lucia.createBlankSessionCookie()
      cookies().set(
        sessionCookie.name,
        sessionCookie.value,
        sessionCookie.attributes
      )
    }
  } catch {
    // Next.js throws error when attempting to set cookies when rendering page
    console.error("Failed to set session cookie")
  }

  return { user: user, session: session }
})
