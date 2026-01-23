import { drizzle } from "drizzle-orm/node-postgres";
import pg from "pg";
import * as schema from "@shared/schema";

const { Pool } = pg;

// Supabase connection string format:
// postgres://postgres.[project-ref]:[password]@aws-0-[region].pooler.supabase.com:6543/postgres
// For local development without database, set to empty string to use in-memory storage
const connectionString = process.env.DATABASE_URL || "";

export const pool = connectionString ? new Pool({ 
  connectionString,
  ssl: connectionString.includes('supabase') ? { rejectUnauthorized: false } : undefined
}) : null;

export const db = pool ? drizzle(pool, { schema }) : null;
