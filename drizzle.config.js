/** @type { import("drizzle-kit").Config } */
export default {
  schema: "./utils/schema.js",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://interview-app-db_owner:GOoJCDTgs6i9@ep-morning-night-a5i7abgb.us-east-2.aws.neon.tech/interview-app-db?sslmode=require",
  },
};
