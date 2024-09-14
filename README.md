# Next.js Starter Boilerplate

A modern, feature-rich starter boilerplate for building Next.js applications, equipped with a powerful tech stack to accelerate your development process.

## Tech Stack

- **Framework:** [Next.js 14](https://nextjs.org)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com)
- **ORM:** [Drizzle ORM](https://orm.drizzle.team/)
- **Database:** [SQLite](https://turso.tech/)
- **Authentication:** [Lucia](https://lucia-auth.com/)
- **Component Library:** [Shadcn UI](https://ui.shadcn.com/)
- **Form Management:** [React Hook Form](https://react-hook-form.com/)
- **State Management:** [Zustand](https://zustand-demo.pmnd.rs/)
- **Validation:** [Zod](https://zod.dev/)
- **Formatter and Linter:** [Biome](https://biomejs.dev/)
- **Email Service:** [Resend](https://resend.com/)

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
   pnpm run dev
   ```
