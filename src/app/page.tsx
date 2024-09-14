import { getGithubStars } from "@/actions/github"
import { Hero } from "@/components/sections/hero"

export default async function HomePage() {
  const stars = await getGithubStars()

  return (
    <div className="-translate-x-1/2 -translate-y-1/2 fixed top-1/2 left-1/2 flex w-full flex-col items-center justify-center">
      <Hero stars={stars} />
    </div>
  )
}
