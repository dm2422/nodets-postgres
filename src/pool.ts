import { Pool } from "pg";

export const pool = new Pool({
    user: "yz",
    password: "805880",
    database: "yzdb",
    host: "database",
    port: 5432
});
