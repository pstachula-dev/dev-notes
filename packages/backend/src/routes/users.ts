import { Hono } from "hono";
import { db } from "../services/drizzle/client";
import { zValidator } from "@hono/zod-validator";
import { z } from "zod";
import { users } from "../services/drizzle/schema/schema";
import { eq } from "drizzle-orm";

export const usersRoute = new Hono()
	.get("/", async (c) => {
		const data = await db.query.users.findMany();

		return c.json(data, 200);
	})
	.get("/:id", async (c) => {
		const data = await db.query.users.findFirst({
			where: eq(users.id, c.req.param("id")),
		});

		return c.json(data, 200);
	})
	.post(
		"/",
		zValidator(
			"form",
			z.object({
				name: z.string(),
				email: z.string().email(),
			}),
		),
		async (c) => {
			const body = c.req.valid("form");
			const user = await db.insert(users).values(body);
			return c.json(user, 201);
		},
	);
