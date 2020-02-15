import { pool } from "../pool";
import nanoid = require("nanoid");
import uuid = require("uuid");

export class Board {
    id!: string;
    name!: string;
    created_at!: Date;

    constructor(init?: Partial<Board>) {
        Object.assign(this, init);
    }

    static async get(id: string): Promise<Board> {
        return new Promise(resolve => {
            pool.connect((err, client) => {
                client
                    .query("select * from board where id=$1", [id])
                    .then(r => resolve(new Board(r.rows[0])))
                    .catch(console.error);
            });
        });
    }

    static async create(name: string): Promise<Board> {
        return new Promise(resolve => {
            pool.connect((err, client) => {
                const newInstance = new Board({
                    id: nanoid(8),
                    name: name,
                    created_at: new Date()
                });

                client
                    .query("insert into board values($1, $2, $3)",
                        Object.values(newInstance))
                    .then(r => resolve(newInstance))
                    .catch(console.error);
            });
        });
    }

    async save(): Promise<Board> {
        return new Promise(resolve => {
            pool.connect((err, client) => {
                client
                    .query("update board set name=$1 where id=$2",
                        [this.name, this.id])
                    .then(r => resolve(this))
                    .catch(console.error);
            });
        });
    }

    async delete(): Promise<Board> {
        return new Promise(resolve => {
            pool.connect((err, client) => {
                client
                    .query("delete from board where id=$1",
                        [this.id])
                    .then(r => {
                        this.id = "N/A";
                        resolve(this);
                    })
                    .catch(console.error);
            })
        });
    }
}
