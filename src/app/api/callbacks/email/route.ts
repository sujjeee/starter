import { NextResponse, type NextRequest } from "next/server"

import { type EmailOtpType } from "@supabase/supabase-js"

import { getErrorMessage } from "@/lib/errors"
import { rateLimit } from "@/lib/rate-limit"
import { supbaseServerClient } from "@/lib/supabase/server"

interface BodyProps {
  token_hash: string
  type: EmailOtpType
}

export async function GET(request: NextRequest) {
  try {
    await rateLimit({})

    const token_hash = request.nextUrl.searchParams.get("token_hash")
    const next = request.nextUrl.searchParams.get("next") || "/"

    if (!token_hash) throw new Error("Missing parameters")

    const supabase = supbaseServerClient()

    if (token_hash) {
      const { error } = await supabase.auth.verifyOtp({
        type: "magiclink",
        token_hash: token_hash,
      })

      if (error) throw new Error(error.message)

      return NextResponse.redirect(new URL(next, request.url))
    }
  } catch (error) {
    return NextResponse.redirect(new URL("/error", request.url))
  }
}
