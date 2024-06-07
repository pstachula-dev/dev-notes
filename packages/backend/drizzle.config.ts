import type { Config } from "drizzle-kit";
export default {
	schema: "./src/services/drizzle/schema/users.ts",
	out: "./drizzle",
	dialect: "sqlite",
	driver: "turso",
	dbCredentials: {
		// url: "./sqlite.db",
		url: "libsql://dev-notes-ald890.turso.io",
		authToken:
			"eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJhIjoicnciLCJpYXQiOjE3MTc3MDU0MTEsImlkIjoiNjk4Yzc5MTAtNGU2NS00NjBiLWE0OWUtM2NhMjI2NWVlMzRmIn0.feLZvKobveZIgOptSd7H5zdpKUxg54hLRhifvmcs6Da-XR6uJ6GnYRDZidD1BL0VLaWKEEAg8hjpBvBZl1uaDw",
	},
} satisfies Config;
