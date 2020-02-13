"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const client = new pg_1.Client({
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
//# sourceMappingURL=index.js.map