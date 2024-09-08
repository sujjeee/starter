import { sql } from "drizzle-orm"
import { sqliteTable, text } from "drizzle-orm/sqlite-core"

export const users = sqliteTable("users", {
  id: text("id").primaryKey(),
  email: text("email").notNull(),
  createdAt: text("created_at").default(sql`CURRENT_TIMESTAMP`),
})

export type User = typeof users.$inferSelect
