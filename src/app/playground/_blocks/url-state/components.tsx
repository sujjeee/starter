"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Shell } from "@/components/ui/shell"
import { Link } from "lucide-react"
import { parseAsInteger, useQueryState } from "nuqs"

export function UrlState() {
  const [hello, setHello] = useQueryState("hello", { defaultValue: "" })
  const [count, setCount] = useQueryState(
    "count",
    parseAsInteger.withDefault(0),
  )

  return (
    <Shell
      header={{
        icon: <Link className="size-3.5" />,
        title: "Url state manager",
      }}
    >
      <div className="h-fit max-w-[500px] sm:p-8 ">
        <div
          className="flexflex-col mx-auto w-full justify-center space-y-3 "
          style={{ scale: 0.9 }}
        >
          <Input
            value={hello}
            placeholder="Search"
            onChange={(e) => setHello(e.target.value || null)}
          />
          <Button onClick={() => setCount((c) => c + 1)} className="w-full">
            Count: {count}
          </Button>
        </div>
      </div>
    </Shell>
  )
}
