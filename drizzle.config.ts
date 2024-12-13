import "dotenv/config";
import type { Config } from "drizzle-kit";

export default {
  schema: "./db/schema.ts",
  out: "./drizzle",
  // driver: "pg",
  dialect: 'postgresql',
  dbCredentials: {
    // connectionString: process.env.DATABASE_URL!,
    url: process.env.DATABASE_URL!,
  },
} satisfies Config;