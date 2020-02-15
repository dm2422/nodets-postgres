// used in "board/"

import express = require("express");
import { Board } from "../models/board";

const router = express.Router();

router.get("/:id", async (req, res) => {
    const board = await Board.get(req.params.id);
    res.json(board);
});

router.post("/", async (req, res) => {
    const board = await Board.create(req.body.name);
    res.json(board);
});

router.put("/:id", async (req, res) => {
    const board = await Board.get(req.params.id);
    board.name = req.body.name;
    board.save();
    res.json(board);
});

router.delete("/:id", async (req, res) => {
    const board = await Board.get(req.params.id);
    await board.delete();
    
    res.json(board);
});

export { router }