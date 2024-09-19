# Next.js Starter Boilerplate

<kbd>
<a href="https://weekend-starter.vercel.app">
  <img alt="Next.js Starter Boilerplate!" src="https://weekend-starter.vercel.app/opengraph-image.png">
</a>
</kbd>

## Introduction

If you're a weekend hustler looking to bring your ideas to life, this starter boilerplate is perfect for you. It includes everything you need to build an MVP in a weekend. With this boilerplate, you'll have access to the latest tech stacks and tools, minimizing setup time so you can focus on building and maximizing productivity.

## Tech Stack

- **Framework:** [Next.js 14](https://nextjs.org)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com)
- **ORM:** [Drizzle ORM](https://orm.drizzle.team/)
- **Database:** [Postgresql](https://supabase.com/)
- **Authentication:** [Supabase Auth](https://supabase.com/)
- **UI Components:** [Shadcn UI](https://ui.shadcn.com/)
- **Form Management:** [React Hook Form](https://react-hook-form.com/)
- **State Management:** [Zustand](https://zustand-demo.pmnd.rs/)
- **Validation:** [Zod](https://zod.dev/)
- **Formatter & Linter:** [Biome](https://biomejs.dev/)
- **Email templates:** [React Email](https://react.email/)
- **Email delivery:** [Resend](https://resend.com/)
- **Rate limiting:** [Upstash](https://upstash.com/)
- **Theme manager:** [next-themes](https://next-themes-example.vercel.app/)
- **Type-safe search params state manager:** [nuqs](https://nuqs.47ng.com/)

## Running Locally

1. Clone the repository

   ```bash
   git clone https://github.com/sujjeee/starter.git
   ```

2. Install dependencies using pnpm

   ```bash
   pnpm install
   ```

3. Copy the `.env.example` to `.env` and update the variables.

   ```bash
   cp .env.example .env
   ```

4. Migrate the database schema

   ```bash
   pnpm db:push
   ```

5. Start the development server

   ```bash
   pnpm dev
   ```

## Deploy

Follow the deployment guides for [Vercel](https://nextjs.org/learn-pages-router/basics/deploying-nextjs-app/deploy).
