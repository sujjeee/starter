import { Command, LockIcon } from "lucide-react"
import { LoginOptions, LogOut } from "./components"
import { Shell } from "@/components/ui/shell"
import { getUser } from "@/lib/supabase/server"

export async function Login() {
  const user = await getUser()

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
          {user ? (
            <LogOut />
          ) : (
            <>
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
            </>
          )}
        </div>
      </div>
    </Shell>
  )
}
