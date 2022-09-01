const Player = require("../models/player.model");

function createNewPlayer(req, res) {
  Player.create(req.body)
  .then(newPlayer => res.json({ player: newPlayer }))
  .catch((err) =>res.json({ error: true, message: "Failed to create Author" }));
 }     

function getAllPlayers(req, res) {
  Player.find().sort('name')
        .then(allPlayers => res.json({ players: allPlayers }))
    .catch((err) => res.json({ message: "something went wrong", error: err }));
}


function deleteById(req, res) {
  Player.deleteOne({ _id: req.params._id })
    .then((result) => res.json(result))
    .catch((err) => res.json({ message: "Something went wrong", error: err }));
}

function find(req, res) {
  Player.findOne({ _id: req.params._id })
    .then((result) => res.json({ result: result }))
    .catch((err) => res.json({ message: "Something went wrong", error: err }));
}

function update(req, res) {
  Player.updateOne(req.params.id,req.body)
    .then(updatePlayer =>res.json({ player:updatePlayer }))
    .catch((err) => res.json(err)); 
}

module.exports = {
  createNewPlayer,
  getAllPlayers,
  deleteById,
  find,
  update,
};
