import dotenv from "dotenv";
const envFound = dotenv.config();

if (envFound.error) {
  throw new Error("⚠️ Couldn't find .env file");
}

process.env.NODE_ENV = process.env.NODE_ENV || "development";

export default {
  port: process.env.PORT,
  client: process.env.CLIENT,
  server: process.env.SERVER,
  api: {
    prefix: "/api",
  },
  pg: {
    user: process.env.PGUSER,
    database: process.env.PGDATABASE,
  },
};
