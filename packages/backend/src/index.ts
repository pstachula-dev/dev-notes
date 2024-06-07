import { Hono } from "hono";
import { cors } from "hono/cors";
import { db } from "./services/drizzle/client";

const app = new Hono()
	.use(cors())
	.get("/", (c) => {
		return c.json("hello");
	})
	.get("/users", async (c) => {
		const users = await db.query.users.findMany();

		return c.json(users, 200);
	})
	.get("/users/:id", async (c) => {
		const users = await db.query.users.findMany();

		return c.json(users, 200);
	});

export default {
	port: 2137,
	fetch: app.fetch,
};

export type AppType = typeof app;

export const lol = 1;
