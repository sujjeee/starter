import { env } from "@/env"
import type { Metadata } from "next"

export const metadata: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
  title: "Page not found",
}

export default function NotFound() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <div className="-translate-x-1/2 -translate-y-1/2 fixed top-1/2 left-1/2 flex w-full max-w-[432px] flex-col items-center justify-center">
        <div className="flex max-w-[432px] flex-col items-center justify-center gap-6 text-center">
          <div className="font-semibold text-[60px] leading-[60px]">404</div>
          <div className="flex flex-col items-center justify-center gap-2">
            <div className="text-center font-semibold">
              Sorry, that page could not be found
            </div>
            <div className="text-center text-muted-foreground text-sm">
              The requested page either doesn&#39;t exist or you don&#39;t have
              access to it
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
