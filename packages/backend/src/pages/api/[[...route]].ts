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

const handler = handle(app);

export default handler;

export type AppType = typeof app;

export const GET = handler;
export const POST = handler;
export const PATCH = handler;
export const PUT = handler;
export const OPTIONS = handler;
