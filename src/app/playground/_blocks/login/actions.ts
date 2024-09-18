"use server"

import { unstable_noStore as noStore } from "next/cache"

import { env } from "@/env"
import { Resend } from "resend"
import { catchError } from "@/lib/errors"
import { rateLimit } from "@/lib/rate-limit"
import { headers } from "next/headers"
import { db } from "@/db"
import { eq } from "drizzle-orm"
import { users } from "@/db/schemas"
import { LoginEmail } from "@/components/emails/login-email"
import { supabaseAdmin } from "@/lib/supabase/server"

const resend = new Resend(env.RESEND_API_KEY)

interface loginWithEmailProps {
  email: string
}

export async function loginWithEmail({ email }: loginWithEmailProps) {
  noStore()
  const headersList = headers()
  const ip = headersList.get("x-real-ip") || "127.0.0.1"

  try {
    await rateLimit({
      actionType: "loginEmail",
      identifier: ip,
    })

    const isUserExists = await db.query.users.findFirst({
      where: eq(users.email, email),
      columns: {
        email: true,
      },
    })

    if (!isUserExists)
      throw new Error("Sign up with Google before logging in with email.")

    const { data, error } = await supabaseAdmin.generateLink({
      type: "magiclink",
      email: email,
    })

    const { properties } = data

    if (properties) {
      const magicLink = `${env.NEXT_PUBLIC_APP_URL}/api/callbacks/email?token_hash=${properties.hashed_token}&next=/playground`

      const { error: emailError } = await resend.emails.send({
        from: "Starter <noreply@email.sujjeee.com>",
        to: email,
        subject: "Verify your email to login",
        headers: {
          "X-Entity-Ref-ID": `${new Date().getTime()}`,
        },
        react: LoginEmail({
          url: magicLink,
        }),
      })

      if (emailError) throw new Error(error?.message)
    }

    if (error) throw new Error(error.message)

    return {
      data: null,
      error: null,
    }
  } catch (error) {
    return catchError(error)
  }
}
