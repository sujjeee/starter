import type { Metadata } from "next"
import { Command } from "lucide-react"
import { LoginOptions } from "./components"

export const metadata: Metadata = {
  title: "Login",
}

export default async function LoginPage() {
  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
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
    </div>
  )
}
