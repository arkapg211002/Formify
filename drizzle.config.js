import { defineConfig } from "drizzle-kit";
 
export default defineConfig({
  schema: "./configs/schema.js",
  out: "./drizzle",
  dialect: 'postgresql',
  dbCredentials: {
    url: 'postgresql://neondb_owner:G0oSDfv2mVTB@ep-dark-firefly-a1q3jw5f.ap-southeast-1.aws.neon.tech/Formify?sslmode=require',
  }
});