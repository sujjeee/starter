import { createEnv } from "@t3-oss/env-nextjs"
import { z } from "zod"

export const env = createEnv({
  server: {
    DATABASE_URL: z.string(),
    DATABASE_AUTH_TOKEN: z.string(),

    GOOGLE_CLIENT_ID: z.string(),
    GOOGLE_CLIENT_ID_CLIENT_SECRET: z.string(),
  },

  client: {
    NEXT_PUBLIC_APP_URL: z.string().url(),
  },

  runtimeEnv: {
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
    DATABASE_URL: process.env.DATABASE_URL,
    DATABASE_AUTH_TOKEN: process.env.DATABASE_AUTH_TOKEN,

    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_ID_CLIENT_SECRET: process.env.GOOGLE_CLIENT_ID_CLIENT_SECRET,
  },
})
