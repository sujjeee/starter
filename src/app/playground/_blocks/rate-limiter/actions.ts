"use server"

import { rateLimit } from "@/lib/rate-limit"
import { catchError } from "@/lib/errors"
import { headers } from "next/headers"

export async function useRateLimiter() {
  try {
    const headersList = headers()
    const ip = headersList.get("x-real-ip") || "127.0.0.1"

    await rateLimit({
      actionType: "testRateLimiter",
      identifier: ip,
    })

    return {
      data: null,
      error: null,
    }
  } catch (error) {
    return catchError(error)
  }
}
