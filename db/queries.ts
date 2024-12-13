import { cache } from "react";
import db from "./drizzle";

export const getCourse = cache(async () => {
  const data = await db.query.courses.findMany();
  return data;
});