import { Command } from "lucide-react"
import { LoginOptions } from "./components"
import { Card } from "@/components/ui/card"

export function Login() {
  return (
    <Card className="p-6 sm:p-8 max-w-[500px] h-fit rounded-2xl overflow-hidden">
      <div
        className="mx-auto flexflex-col justify-center space-y-6 w-full "
        style={{ scale: 0.9 }}
      >
        <div className="flex flex-col space-y-2 text-center">
          <Command className="mx-auto size-6" />
          <h1 className="font-semibold text-2xl tracking-tight">
            Welcome back
          </h1>
          <p className="text-muted-foreground text-sm">
            Enter your email to sign in to your account
          </p>
        </div>
        <LoginOptions />
      </div>
    </Card>
  )
}
