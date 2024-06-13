import { Hono } from "hono";
import { handle } from "hono/vercel";
import { cors } from "hono/cors";
import { usersRoute } from "../../routes/users";
import { notesRoute } from "../../routes/notes";

export const config = {
	runtime: "edge",
};

const app = new Hono()
	.basePath("/api")
	.use(cors())
	.route("/users", usersRoute)
	.route("/notes", notesRoute);

export default handle(app);

export type AppType = typeof app;
