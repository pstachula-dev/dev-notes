import { eq } from "drizzle-orm";
import { db } from "../services/drizzle/client";
import { notes } from "../services/drizzle/schema/schema";

export const notesFindMany = () => {
	return db.query.notes.findMany();
};

export const notesfindFirst = (id: string) => {
	return db.query.notes.findFirst({
		where: eq(notes.id, id),
	});
};
