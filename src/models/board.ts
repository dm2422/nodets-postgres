import { pool } from "../pool";
import nanoid = require("nanoid");

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
                console.log(Object.values(newInstance));
                
                client
                    .query("insert into board values($1, $2, $3)", 
                            Object.values(newInstance))
                    .then(r => {
                        resolve(newInstance);
                    })
                    .catch(console.error);
            })
        })
    }
}
