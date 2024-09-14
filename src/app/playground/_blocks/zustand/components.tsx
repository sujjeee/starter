"use client"

import { useStore } from "./store"
import { Button } from "@/components/ui/button"

export function IncrementButton() {
  const increment = useStore((state) => state.inc)

  return <Button onClick={increment}>Increment Counter</Button>
}

export function CounterDisplay() {
  const { count } = useStore()

  return <div className="text-xl font-medium">Count: {count}</div>
}
