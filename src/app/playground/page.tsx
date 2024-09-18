import React from "react"
import { Login } from "./_blocks/login/page"
import { UrlState } from "./_blocks/url-state/page"
import { RateLimiter } from "./_blocks/rate-limiter/page"
import { NextForm } from "./_blocks/form/page"
import { Metadata } from "./_blocks/metadata/page"
import { ThemeToggle } from "./_blocks/theme/page"
import { Zustand } from "./_blocks/zustand/page"
import { EmailShell } from "./_blocks/email/page"

export default function page() {
  return (
    <section className="p-2.5 pt-10  flex items-center justify-center ">
      <div className="sm:container sm:max-w-screen-xl">
        <div className="list-none space-y-4 py-8 sm:block sm:columns-2 sm:gap-4 lg:columns-3 pb-28">
          <Login />
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
