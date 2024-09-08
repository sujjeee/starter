import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core"
import { users } from "./users"

export const sessions = sqliteTable("sessions", {
  id: text("id").primaryKey(),
  userId: text("user_id")
    .references(() => users.id, {
      onDelete: "cascade",
    })
    .notNull(),
  expiresAt: integer("expires_at").notNull(),
})
