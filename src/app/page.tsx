import BlurHeroDemo from "@/components/layouts/hero"
import Image from "next/image"

export default function Home() {
  return (
    <div className="fixed left-1/2 top-1/2 flex w-full -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center">
      <BlurHeroDemo />
    </div>
  )
}
