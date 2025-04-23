import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';
export default defineConfig({
  out: './drizzle',
  schema: './configs/schema.ts',
  dialect: 'postgresql',
  dbCredentials: {
    url: 'postgresql://neondb_owner:npg_fGYEzaQ46UmV@ep-shrill-snowflake-a57iow7b-pooler.us-east-2.aws.neon.tech/neondb?sslmode=require',
  },
});