import { drizzle } from "drizzle-orm/libsql";
import { createClient } from "@libsql/client";
import * as schema from "./schema/schema";

const client = createClient({
	url: process.env.DB_URL || "",
	authToken: process.env.DB_AUTH || "",
});

export const db = drizzle(client, { schema });
