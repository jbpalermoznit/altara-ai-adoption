import 'server-only';
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from './schema';

/**
 * Conexão Drizzle pro Supabase Postgres.
 * Usa pooler (porta 6543) por padrão — bom pra serverless.
 * Migrations usam DIRECT_URL (porta 5432).
 */
const connectionString = process.env.DATABASE_URL!;

// Singleton pra reuso em serverless (cold start)
const globalForDb = globalThis as unknown as {
  pgClient: ReturnType<typeof postgres> | undefined;
};

const pgClient =
  globalForDb.pgClient ??
  postgres(connectionString, {
    prepare: false, // pooler do Supabase em transaction mode não suporta prepared statements
    max: 10,
  });

if (process.env.NODE_ENV !== 'production') globalForDb.pgClient = pgClient;

export const db = drizzle(pgClient, { schema });
export { schema };
