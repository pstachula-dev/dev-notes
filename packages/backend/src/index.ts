import { Hono } from "hono";
import { handle } from "@hono/node-server/vercel";
import { cors } from "hono/cors";
import { usersRoute } from "./routes/users";
import { notesRoute } from "./routes/notes";

const app = new Hono()
	.use(cors())
	.route("/users", usersRoute)
	.route("/notes", notesRoute);

// export default {
// 	port: 2137,
// 	fetch: app.fetch,
// };

export default handle(app);

export type AppType = typeof app;
