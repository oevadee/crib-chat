import { Pool } from "pg";

const pool = new Pool();

export default {
  pool,
  query: (text: string, params?: any[]) => {
    return pool.query(text, params);
  },
};
