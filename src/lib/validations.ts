import * as z from "zod"

export const emailSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email",
  }),
})
