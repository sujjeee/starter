"use client"

import { useStore } from "./store"
import { Button } from "@/components/ui/button"
import { Shell } from "@/components/ui/shell"
import { Route } from "lucide-react"

export function Zustand() {
  return (
    <Shell
      header={{
        icon: <Route className="size-3.5" />,
        title: "Zustand",
      }}
    >
      <div className="h-fit max-w-[500px] sm:p-8 ">
        <div
          className="flexflex-col mx-auto w-full justify-center space-y-3 "
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

export function IncrementButton() {
  const increment = useStore((state) => state.inc)

  return <Button onClick={increment}>Increment Counter</Button>
}

export function CounterDisplay() {
  const { count } = useStore()

  return <div className="font-medium text-xl">Count: {count}</div>
}
