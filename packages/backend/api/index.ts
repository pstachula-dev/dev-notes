import { Hono } from "hono";
import { handle } from "hono/vercel";
import { cors } from "hono/cors";
import { usersRoute } from "../src/routes/users";
import { notesRoute } from "../src/routes/notes";

export const config = {
	// runtime: "edge",
};

const app = new Hono()
	.use(cors())
	.basePath("/api")
	.route("/users", usersRoute)
	.route("/notes", notesRoute);

// export default {
// 	port: 2137,
// 	fetch: app.fetch,
// };

export default handle(app);

export type AppType = typeof app;
