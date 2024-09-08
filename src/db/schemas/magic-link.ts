import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core"
import { users } from "./users"

export const magicLinks = sqliteTable("magic_links", {
  id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  userId: text("user_id")
    .references(() => users.id, {
      onDelete: "cascade",
    })
    .notNull(),
  token: text("token"),
})
