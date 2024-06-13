import type { Config } from "drizzle-kit";
export default {
	schema: "./src/services/drizzle/schema/schema.ts",
	out: "./drizzle",
	dialect: "sqlite",
	driver: "turso",
	dbCredentials: {
		// url: "./sqlite.db",
		url: process.env.DB_URL,
		authToken: process.env.DB_AUTH_TOKEN,
	},
} satisfies Config;
