import { Client } from "pg";

const client = new Client({
    user: "yz",
    password: "805880",
    database: "yzdb",
    host: "database",
    port: 5432
});
client.connect();
client.query("SELECT NOW()", (err, res) => {
    console.log(res);
    client.end();
});

console.log("hello pg");