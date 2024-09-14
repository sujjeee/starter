"use client"

import { Button } from "@/components/ui/button"
import { Shell } from "@/components/ui/shell"
import { Infinity } from "lucide-react"

export function RateLimiter() {
  return (
    <Shell
      header={{
        icon: <Infinity className="size-3.5" />,
        title: "Rate limiter",
      }}
    >
      <div className="sm:p-8 max-w-[500px] h-fit ">
        <div
          className="mx-auto flexflex-col justify-center space-y-3 w-full "
          style={{ scale: 0.9 }}
        >
          <Button className="w-full">Submit</Button>
        </div>
      </div>
    </Shell>
  )
}
