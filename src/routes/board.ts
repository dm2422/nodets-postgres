// used in "board/"

import express = require("express");
import { Board } from "../models/board";
import { isNullOrUndefined } from "util";

const router = express.Router();

// Auth check and Board existance check.
router.all("/:id", async (req, res, next) => {
    // There not any auth code.
    if (isNullOrUndefined(req.query.auth)) {
        res.status(400).end();
        return;
    }
    const authCode: string = req.query.auth;
    const board = await Board.get(req.params.id);
    console.log(board);
    
    if (board.exists() && board.authorize(authCode)) {
        next();
    } else {
        res.status(403).end();
    }
});

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
    board.title = req.body.title;
    board.save();
    res.json(board);
});

router.delete("/:id", async (req, res) => {
    const board = await Board.get(req.params.id);
    await board.delete();

    res.json(board);
});

export { router }