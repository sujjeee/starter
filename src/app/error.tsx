"use client"

export default function NextError() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <div className="-translate-x-1/2 -translate-y-1/2 fixed top-1/2 left-1/2 flex w-full max-w-[432px] flex-col items-center justify-center">
        <div className="font-medium text-sm">Something went wrong</div>
      </div>
    </div>
  )
}
