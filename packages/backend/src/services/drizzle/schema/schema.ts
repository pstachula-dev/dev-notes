import { createId } from "@paralleldrive/cuid2";
import { relations } from "drizzle-orm";
import { text, sqliteTable, integer } from "drizzle-orm/sqlite-core";

export const users = sqliteTable("users", {
	id: text("id")
		.primaryKey()
		.$defaultFn(() => createId()),
	name: text("name").notNull(),
	email: text("email").notNull().unique(),
	createdAt: integer("created_at", { mode: "timestamp" })
		.notNull()
		.$defaultFn(() => new Date()),
	updatedAt: integer("updated_at", { mode: "timestamp" }),
});

export const notes = sqliteTable("notes", {
	id: text("id")
		.primaryKey()
		.$defaultFn(() => createId()),
	text: text("text").notNull(),
	authorId: text("author_id").notNull(),
	createdAt: integer("created_at", { mode: "timestamp" })
		.notNull()
		.$defaultFn(() => new Date()),
	updatedAt: integer("updated_at", { mode: "timestamp" }),
});

export const usersRelations = relations(users, ({ many }) => ({
	notes: many(notes),
}));

export const postsRelations = relations(notes, ({ one }) => ({
	author: one(users, {
		fields: [notes.authorId],
		references: [users.id],
	}),
}));
