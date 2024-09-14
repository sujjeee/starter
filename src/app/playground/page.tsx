import React from "react"
import { Login } from "./_blocks/login/page"

export default function page() {
  return (
    <section className="p-2.5 pt-10  flex items-center justify-center ">
      <div className="sm:container sm:max-w-screen-xl">
        <div className="list-none space-y-4 py-8 sm:block sm:columns-2 sm:gap-4 lg:columns-3 pb-28">
          <Login />
          <Login />
          <Login />
          <Login />
          <Login />
          <Login />
          <Login />
        </div>
      </div>
    </section>
  )
}
