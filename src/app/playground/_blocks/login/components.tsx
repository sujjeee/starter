"use client"

import React from "react"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import type { z } from "zod"
import { emailSchema } from "@/lib/validations"
import { Input } from "@/components/ui/input"
import { Button, buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { showErrorToast } from "@/lib/errors"
import { cn } from "@/lib/utils"
import { Spinner } from "@/components/icons/spinner"
import { supabaseClient } from "@/lib/supabase/client"
export function LoginOptions() {
  const [isLoading, setIsLoading] = React.useState(false)
  const [isGoogleLoading, setIsGoogleLoading] = React.useState(false)

  const form = useForm<z.infer<typeof emailSchema>>({
    resolver: zodResolver(emailSchema),
    defaultValues: {
      email: "",
    },
  })

  async function onSubmit(formData: z.infer<typeof emailSchema>) {
    try {
      setIsLoading(true)

      // const { error } = await signInWithEmail({
      //   email: formData.email,
      // })

      // if (error) throw new Error(error)

      toast("Email sent! Please check your inbox to verify.")
      form.reset()
    } catch (error) {
      showErrorToast(error)
    } finally {
      setIsLoading(false)
    }
  }

  async function onGoogleAuth() {
    try {
      setIsGoogleLoading(true)

      await supabaseClient.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: `${location.origin}/api/callbacks/google?next=/playground`,
          queryParams: {
            access_type: "offline",
            prompt: "consent",
          },
        },
      })
    } catch (error) {
      showErrorToast(error)
    } finally {
      setIsGoogleLoading(false)
    }
  }

  return (
    <div className="grid gap-6">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-3">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="w-full" disabled={isLoading}>
            {isLoading && (
              <Icons.spinner
                className="mr-2 size-4 animate-spin"
                aria-hidden="true"
              />
            )}
            Continue with Email
          </Button>
        </form>
      </Form>

      <div className="relative">
        <div className="absolute inset-0 flex items-center ">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">Or</span>
        </div>
      </div>

      <button
        type="button"
        className={cn(buttonVariants({ variant: "outline" }))}
        disabled={isGoogleLoading}
        onClick={onGoogleAuth}
      >
        {isGoogleLoading ? (
          <Spinner />
        ) : (
          <Icons.google className="mr-2 size-4" aria-hidden="true" />
        )}
        Continue with Google
      </button>
    </div>
  )
}

export function LogOut() {
  return (
    <Button
      className="w-full"
      onClick={async () => {
        await supabaseClient.auth.signOut()
        window.location.reload()
      }}
    >
      Log out
    </Button>
  )
}
