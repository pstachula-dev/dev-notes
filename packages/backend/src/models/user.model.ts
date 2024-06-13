import { eq } from "drizzle-orm";
import { db } from "../services/drizzle/client";
import { users } from "../services/drizzle/schema/schema";

export const usersFindMany = () => {
	return db.query.users.findMany();
};

export const usersfindFirst = (id: string) => {
	return db.query.users.findFirst({
		where: eq(users.id, id),
	});
};
