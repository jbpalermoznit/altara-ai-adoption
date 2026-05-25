import type { Config } from 'drizzle-kit';
import { config as loadEnv } from 'dotenv';

loadEnv({ path: '.env.local' });

export default {
  schema: './lib/db/schema.ts',
  out: './drizzle',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DIRECT_URL || process.env.DATABASE_URL || '',
  },
  verbose: true,
  strict: true,
} satisfies Config;
