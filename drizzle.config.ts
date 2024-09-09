import { env } from "@/env"
import type { Config } from "drizzle-kit"

export default {
  schema: "./src/db/schemas/*",
  driver: "turso",
  dialect: "sqlite",
  dbCredentials: {
    url: env.DATABASE_URL,
    authToken: env.DATABASE_AUTH_TOKEN,
  },
  out: "./drizzle",
} satisfies Config
