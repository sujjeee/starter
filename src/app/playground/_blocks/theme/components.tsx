"use client"

import { Button } from "@/components/ui/button"
import { Shell } from "@/components/ui/shell"
import { Moon, MoonIcon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ThemeToggle() {
  const { setTheme, theme } = useTheme()

  return (
    <Shell
      header={{
        icon: <MoonIcon className="size-3.5" />,
        title: "Theme",
      }}
    >
      <div className="h-fit max-w-[500px] sm:p-8 ">
        <div
          className="flexflex-col mx-auto w-full justify-center space-y-3 "
          style={{ scale: 0.9 }}
        >
          <Button
            variant="outline"
            size="icon"
            className="rounded-lg"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            <Sun
              className="dark:-rotate-90 h-5 w-5 rotate-0 scale-100 transition-all dark:scale-0"
              aria-hidden="true"
            />
            <Moon
              className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
              aria-hidden="true"
            />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div>
      </div>
    </Shell>
  )
}
