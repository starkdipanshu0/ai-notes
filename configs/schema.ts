
import { boolean, serial, varchar, pgTable, json, text, timestamp } from "drizzle-orm/pg-core";

export const Users = pgTable('users', {
  id: serial('id').primaryKey().notNull(),
  name: varchar('name', { length: 255 }).notNull(),
  email: varchar('email', { length: 255 }).notNull(),
  imageUrl: varchar('imageUrl', { length: 255 }).notNull(),
  subscription: boolean('subscription').default(false),
});

// export const Notes = pgTable('notes', {
//   id: serial('id').primaryKey().notNull(),
//   title: varchar('title', { length: 255 }).notNull(),
//   content: text('content').notNull(),
//   createdAt: timestamp('created_at').defaultNow().notNull(),
//   userId: serial('user_id').notNull(),
// });