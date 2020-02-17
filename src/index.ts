import express = require("express");
import bodyPerser = require("body-parser");
import boardRouter = require("./routes/board");

const app = express();

app.use(bodyPerser.urlencoded({ extended: true }));
app.use(bodyPerser.json());

app.use("/board", boardRouter.router);
app.listen(8000, () => {
    console.log("Listening on 8000.");
});

export default app;
