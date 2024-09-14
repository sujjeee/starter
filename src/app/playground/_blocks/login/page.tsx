import { Command, LockIcon } from "lucide-react"
import { LoginOptions } from "./components"
import { Shell } from "@/components/ui/shell"

export function Login() {
  return (
    <Shell
      header={{
        icon: <LockIcon className="size-3.5" />,
        title: "Login",
      }}
    >
      <div className="sm:p-8 max-w-[500px] h-fit ">
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
      </div>
    </Shell>
  )
}
