import { Icons } from "@/components/icons"
import { Badge } from "@/components/ui/badge"
import { Button, buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { MoveRight } from "lucide-react"
import Link from "next/link"

interface HeroProps {
  stars: number
}

export function Hero({ stars }: HeroProps) {
  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <div className="max-w-screen-sm">
        <div className="mb-8 flex items-center space-x-6">
          <Badge
            variant="outline"
            className="relative rounded-full px-3 py-1 text-xs leading-6 text-muted-foreground ring-1.5 ring-inset ring-muted-foreground"
          >
            <Icons.github className="size-4 mr-1.5" /> {stars} Stars on Github
          </Badge>
        </div>
        <h1 className="mb-6 text-[56px] text-foreground leading-[61px]">
          Build modern websites with next.js
        </h1>
        <p className="mb-8 text-[21px] text-muted-foreground leading-[28px]">
          Spend your weekend creating amazing web apps with a <br /> collection
          of popular tech stacks and tools.
        </p>
        <div className="flex items-center space-x-6">
          <Link
            href="/login"
            className={cn(
              buttonVariants({
                variant: "default",
                size: "sm",
              })
            )}
          >
            Get started
          </Link>
          <a
            target="_blank"
            href="https://github.com/sujjeee/starter"
            className="flex items-center text-sm font-medium text-muted-foreground leading-6 text-zinc-90"
            rel="noreferrer"
          >
            Documentation
            <MoveRight className="ml-1 size-4" />
          </a>
        </div>
      </div>
    </div>
  )
}
