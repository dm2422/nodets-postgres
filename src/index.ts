import express = require("express");
import boardRouter = require("./routes/board");

const app = express();

app.use("/board", boardRouter.router);
app.listen(8000, () => {
    console.log("Listening on 8000.");
});
