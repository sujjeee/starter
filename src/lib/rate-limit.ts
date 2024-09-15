import { Ratelimit } from "@upstash/ratelimit"
import { Redis } from "@upstash/redis"

type Unit = "ms" | "s" | "m" | "h" | "d"
type Duration = `${number} ${Unit}`

interface RateLimitOptions {
  identifier: string
  limit: number
  duration: Duration
}

const redisEnv = Redis.fromEnv()

export async function rateLimit({
  identifier,
  limit,
  duration,
}: RateLimitOptions) {
  const ratelimiter = new Ratelimit({
    redis: redisEnv,
    limiter: Ratelimit.slidingWindow(limit, duration),
    analytics: true,
    prefix: "@starter",
  })

  const { success } = await ratelimiter.limit(identifier)

  if (!success) {
    throw new Error("Too many requests. Please try again later.")
  }
}
