const express = require("express");
const { controller } = require("../Mongo/bowlingController");
const newGame = require("../Mongo/bowlingSchema");
const { transformAddRequest } = require("../Utility/transformAddRequest");

const BowlingRouter = express.Router();

BowlingRouter.get("/get", async (req, res) => {
  const posts = await controller("Get");
  res.json(posts);
});

BowlingRouter.post("/add", async (req, res) => {
  const game = new newGame({
    game: transformAddRequest(req.body),
  });
  const addedGame = await controller("Add", game);
  res.json(addedGame);
});

module.exports = BowlingRouter;
