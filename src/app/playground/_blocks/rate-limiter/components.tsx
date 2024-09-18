"use client"

import { Button } from "@/components/ui/button"
import { Shell } from "@/components/ui/shell"
import { InfinityIcon } from "lucide-react"
import { useRateLimiter } from "./actions"
import { toast } from "sonner"
import React from "react"
import { showErrorToast } from "@/lib/errors"

export function RateLimiter() {
  const [_, setIsPending] = React.useState(false)

  async function onSubmit() {
    try {
      setIsPending(true)

      const { error } = await useRateLimiter()
      if (error) throw new Error(error)

      toast("Success")
    } catch (error) {
      showErrorToast(error)
    } finally {
      setIsPending(false)
    }
  }

  return (
    <Shell
      header={{
        icon: <InfinityIcon className="size-3.5" />,
        title: "Rate limiter",
      }}
    >
      <div className="h-fit max-w-[500px] sm:p-8 ">
        <div
          className="flexflex-col mx-auto w-full justify-center space-y-3 "
          style={{ scale: 0.9 }}
        >
          <Button className="w-full" onClick={onSubmit}>
            Submit
          </Button>
        </div>
      </div>
    </Shell>
  )
}
