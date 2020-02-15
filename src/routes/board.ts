// used in "board/"

import express = require("express");
import nanoid = require("nanoid");
import { getBoardByID } from "../queries";

const router = express.Router();

router.get("/:id", async (req, res, next) => {
    console.log("Board access " + req.params.id + ".");
    const user = await getBoardByID(req.params.id);
    res.json(user);
});

export { router }