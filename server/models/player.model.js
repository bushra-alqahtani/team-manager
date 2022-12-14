const mongoose = require("mongoose");

const Game = new mongoose.Schema({
  status: String,
});
const PlayerScheme = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      minlength: [3, "Name should be at least 3 characters"],
    },
    position: String,
    games: [Game],
  },
  { timestamps: true }
);

const Player = mongoose.model("Player", PlayerScheme);
module.exports = Player;
