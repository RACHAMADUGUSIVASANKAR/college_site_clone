import { defineConfig } from "drizzle-kit";

// Allow drizzle commands to run even without DATABASE_URL
// You must set DATABASE_URL before running db:push or migrations
const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl && process.argv.includes("push")) {
  throw new Error(
    "DATABASE_URL is required to push schema. " +
    "Please set your Supabase connection string in DATABASE_URL environment variable."
  );
}

export default defineConfig({
  out: "./migrations",
  schema: "./shared/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: databaseUrl || "postgres://placeholder",
  },
});
