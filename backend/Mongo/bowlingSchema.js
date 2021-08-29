const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

//This schema is for the one Row or document
const BowlingGameSchema = new Schema({
  author: ObjectId,
  game: Schema.Types.Mixed,
});

module.exports = mongoose.model("game", BowlingGameSchema);
