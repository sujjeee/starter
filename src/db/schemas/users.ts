import { index, pgTable, text, uuid } from "drizzle-orm/pg-core"

export const users = pgTable(
  "users",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    email: text("email").notNull(),
    name: text("name"),
  },
  (table) => ({
    idx_users_email: index("idx_users_email").on(table.email),
  }),
)

export type User = typeof users.$inferSelect
export type NewUser = typeof users.$inferInsert
