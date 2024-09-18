import { Redis } from "@upstash/redis"
import { Ratelimit } from "@upstash/ratelimit"
import type { SlidingWindowConfig, ActionType, RateLimitProps } from "@/types"

const redisEnv = Redis.fromEnv()
const rateLimiters = new Map()

function getRateLimit(actionType?: ActionType): SlidingWindowConfig {
  switch (actionType) {
    case "templateUpdate":
      return { limit: 5, duration: "10m" }
    case "profileUpdate":
      return { limit: 3, duration: "30m" }
    case "exportConnection":
      return { limit: 3, duration: "1h" }
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
  const rateLimiter = getDynamicRateLimiter(actionType)
  const { success } = await rateLimiter.limit(identifier)

  if (!success) {
    throw new Error("Too many requests. Please try again later.")
  }
}
