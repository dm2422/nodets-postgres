// used in "board/"

import express = require("express");
import { Board } from "../models/board";

const router = express.Router();

router.get("/:id", async (req, res, next) => {
    const board = await Board.get(req.params.id);
    res.json(board);
});

router.post("/", async (req, res, next) => {
    console.log(req.body);
    const board = await Board.create(req.body.name);
    res.json(board);
});

export { router }