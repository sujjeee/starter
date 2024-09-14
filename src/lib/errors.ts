import { toast } from "sonner"
import { z } from "zod"

export function getErrorMessage(err: unknown) {
  if (err instanceof z.ZodError) {
    const errors = err.issues.map((issue) => {
      return issue.message
    })
    return errors.join("\n")
  }

  if (err instanceof Error) {
    return err.message
  }

  return "Something went wrong. Please try again later."
}

export function showErrorToast(err: unknown) {
  const errorMessage = getErrorMessage(err)
  return toast.error(errorMessage)
}

export function catchError(err: unknown) {
  return {
    data: null,
    error: getErrorMessage(err),
  }
}
