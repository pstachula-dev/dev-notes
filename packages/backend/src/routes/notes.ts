import { Hono } from "hono";
import { notesFindMany, notesfindFirst } from "src/models/notes.model";

export const notesRoute = new Hono()
	.get("/", async (c) => {
		const data = await notesFindMany();

		return c.json(data, 200);
	})
	.get("/:id", async (c) => {
		const data = await notesfindFirst(c.req.param("id"));

		return c.json(data, 200);
	});
