import { pgTable, text, timestamp, serial } from "drizzle-orm/pg-core";

// Contacts table for contact form submissions
export const contacts = pgTable("contact", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at", { mode: "date" }).defaultNow(),
});
