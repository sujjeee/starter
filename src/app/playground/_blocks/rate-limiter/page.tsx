"use client"

import { Button } from "@/components/ui/button"
import { Shell } from "@/components/ui/shell"
import { Infinity } from "lucide-react"
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
        icon: <Infinity className="size-3.5" />,
        title: "Rate limiter",
      }}
    >
      <div className="sm:p-8 max-w-[500px] h-fit ">
        <div
          className="mx-auto flexflex-col justify-center space-y-3 w-full "
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
