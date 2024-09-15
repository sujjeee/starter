"use server"

import { rateLimit } from "@/lib/rate-limit"
import { catchError } from "@/lib/errors"

export async function useRateLimiter() {
  try {
    await rateLimit({
      identifier: "127.0.0.1",
      limit: 5,
      duration: "10 m",
    })

    return {
      data: null,
      error: null,
    }
  } catch (error) {
    return catchError(error)
  }
}
