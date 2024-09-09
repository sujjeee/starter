"use client"

export default function NextError() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <div className="fixed left-1/2 top-1/2 flex w-full max-w-[432px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center">
        <div className="text-sm font-medium">Something went wrong</div>
      </div>
    </div>
  )
}
