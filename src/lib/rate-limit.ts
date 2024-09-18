import { Redis } from "@upstash/redis"
import { Ratelimit } from "@upstash/ratelimit"
import type { SlidingWindowConfig, ActionType, RateLimitProps } from "@/types"
import { headers } from "next/headers"

const redisEnv = Redis.fromEnv()
const rateLimiters = new Map()

function getRateLimit(actionType?: ActionType): SlidingWindowConfig {
  switch (actionType) {
    case "sendEmail":
      return { limit: 2, duration: "1h" }
    case "loginEmail":
      return { limit: 3, duration: "1h" }
    case "testRateLimiter":
      return { limit: 3, duration: "10m" }
    default:
      return { limit: 2, duration: "10s" }
  }
}

function getDynamicRateLimiter(actionType?: ActionType): Ratelimit {
  if (!rateLimiters.has(actionType)) {
    const { limit, duration } = getRateLimit(actionType)

    const newLimiter = new Ratelimit({
      redis: redisEnv,
      analytics: true,
      prefix: `ratelimit:${actionType}`,
      limiter: Ratelimit.slidingWindow(limit, duration),
    })

    rateLimiters.set(actionType, newLimiter)
  }

  return rateLimiters.get(actionType)
}

export async function rateLimit({
  actionType,
  identifier,
}: RateLimitProps): Promise<void> {
  const headersList = headers()
  const ip = headersList.get("x-real-ip") || "127.0.0.1"

  const rateLimiter = getDynamicRateLimiter(actionType)
  const { success } = await rateLimiter.limit(identifier ?? ip)

  if (!success) {
    throw new Error("Too many requests. Please try again later.")
  }
}
