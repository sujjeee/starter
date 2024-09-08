import React from "react"
import type { Metadata } from "next"
import { env } from "@/env"

export const metadata: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
  title: "Page not found",
}

export default function NotFound() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <div className="fixed left-1/2 top-1/2 flex w-full max-w-[432px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center">
        <div className="flex max-w-[432px] flex-col items-center justify-center gap-6 text-center">
          <div className="text-[60px] font-semibold leading-[60px]">404</div>
          <div className="flex flex-col items-center justify-center gap-2">
            <div className="text-center font-semibold">
              Sorry, that page could not be found
            </div>
            <div className="text-center text-sm text-muted-foreground">
              The requested page either doesn&#39;t exist or you don&#39;t have
              access to it
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
