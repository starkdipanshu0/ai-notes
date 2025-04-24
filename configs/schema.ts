
import { sum } from "drizzle-orm";
import { boolean, serial, varchar, pgTable, json, text, timestamp } from "drizzle-orm/pg-core";

export const Users = pgTable('users', {
  id: serial('id').primaryKey().notNull(),
  name: varchar('name', { length: 255 }).notNull(),
  email: varchar('email', { length: 255 }).notNull(),
  imageUrl: varchar('imageUrl', { length: 255 }).notNull(),
  subscription: boolean('subscription').default(false),
});

export const Notes = pgTable('notes', {
  id: varchar('id', {length:36}).primaryKey().notNull(),
  title: varchar('title', { length: 255 }).notNull(),
  content: text('content').notNull(),
  summary: text('summary').notNull(),
  createdBy: varchar('createdBy', { length: 255 }).notNull(),
});