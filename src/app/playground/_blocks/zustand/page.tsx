"use client"

import { Shell } from "@/components/ui/shell"
import { Route } from "lucide-react"
import { CounterDisplay, IncrementButton } from "./components"

export function Zustand() {
  return (
    <Shell
      header={{
        icon: <Route className="size-3.5" />,
        title: "Zustand",
      }}
    >
      <div className="sm:p-8 max-w-[500px] h-fit ">
        <div
          className="mx-auto flexflex-col justify-center space-y-3 w-full "
          style={{ scale: 0.9 }}
        >
          <div className="flex items-center justify-between ">
            <IncrementButton />
            <CounterDisplay />
          </div>
        </div>
      </div>
    </Shell>
  )
}
