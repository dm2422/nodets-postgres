import { Pool } from "pg";
import { Board } from "./models/board";

const pool = new Pool({
    user: "yz",
    password: "805880",
    database: "yzdb",
    host: "database",
    port: 5432
});

export function getBoardByID(id: string): Promise<Board> {
    return new Promise(resolve => {
        pool.connect((err, client) => {
            client
                .query("select * from board where id=$1", [id])
                .then(r => resolve(new Board(r.rows[0])))
                .catch(console.error);
        });
    });
}
