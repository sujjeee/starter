import { Login } from "./_blocks/login/components"
import { UrlState } from "./_blocks/url-state/components"
import { RateLimiter } from "./_blocks/rate-limiter/components"
import { NextForm } from "./_blocks/form/components"
import { Metadata } from "./_blocks/metadata/components"
import { ThemeToggle } from "./_blocks/theme/components"
import { Zustand } from "./_blocks/zustand/components"
import { EmailShell } from "./_blocks/email/components"
import { getUser } from "@/lib/supabase/server"

export default async function page() {
  const user = await getUser()

  return (
    <section className="flex items-center justify-center p-2.5 pt-10 ">
      <div className="sm:container sm:max-w-screen-xl">
        <div className="list-none space-y-4 py-8 pb-28 sm:block sm:columns-2 sm:gap-4 lg:columns-3">
          <Login user={user} />
          <EmailShell />
          <UrlState />
          <RateLimiter />
          <NextForm />
          <Metadata />
          <ThemeToggle />
          <Zustand />
        </div>
      </div>
    </section>
  )
}
