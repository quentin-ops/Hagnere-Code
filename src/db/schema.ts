import { pgTable, text, timestamp, serial } from "drizzle-orm/pg-core";

// Contacts particuliers (Individual contacts)
export const contactIndividual = pgTable("contact_individual", {
  id: serial("id").primaryKey(),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  message: text("message").notNull(),
  createdAt: timestamp("created_at", { mode: "date" }).defaultNow(),
});

// Contacts entreprises (Company contacts)
export const contactCompany = pgTable("contact_company", {
  id: serial("id").primaryKey(),
  siren: text("siren").notNull(),
  companyName: text("company_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  message: text("message").notNull(),
  createdAt: timestamp("created_at", { mode: "date" }).defaultNow(),
});
