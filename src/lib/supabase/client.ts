import { env } from "@/env"
import { createBrowserClient } from "@supabase/ssr"

export const supabaseClient = createBrowserClient(
  env.NEXT_PUBLIC_SUPABASE_URL,
  env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
)
