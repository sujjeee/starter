"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Mail } from "lucide-react"
import { Shell } from "@/components/ui/shell"
import React from "react"
import { sendEmail } from "./actions"
import { toast } from "sonner"
import { showErrorToast } from "@/lib/errors"
import { Spinner } from "@/components/icons/spinner"

const FormSchema = z.object({
  email: z.string().email(),
})

export function EmailShell() {
  const [isLoading, setIsLoading] = React.useState(false)

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
    },
  })

  async function onSubmit(formData: z.infer<typeof FormSchema>) {
    try {
      setIsLoading(true)

      const { error } = await sendEmail({
        email: formData.email,
      })

      if (error) throw new Error(error)

      toast("Email sent! Please check your inbox.")
      form.reset()
    } catch (error) {
      showErrorToast(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Shell
      header={{
        icon: <Mail className="size-3.5" />,
        title: "Email",
      }}
    >
      <div className="h-fit max-w-[500px] sm:p-8 ">
        <div
          className="flexflex-col mx-auto w-full justify-center space-y-3 "
          style={{ scale: 0.9 }}
        >
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="w-full space-y-3"
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full">
                {isLoading && <Spinner />}
                Send
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </Shell>
  )
}
