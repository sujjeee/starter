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
      <div className="sm:p-8 max-w-[500px] h-fit ">
        <div
          className="mx-auto flexflex-col justify-center space-y-3 w-full "
          style={{ scale: 0.9 }}
        >
          <Button
            variant="outline"
            size="icon"
            className="rounded-lg"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            <Sun
              className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
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
