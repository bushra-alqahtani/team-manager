const   PlayerController = require("../controllers/player.controller")
function registerPlayerRoutes(app)
{
    //create one
    app.post("/api/player/new", PlayerController.createNewPlayer);

    //all authers
    app.get("/api/players", PlayerController.getAllPlayers);

    //find one by id
    app.get("/api/player/:_id", PlayerController.find);

    //delete one
    app.delete("/api/players/deletebyId/:_id", PlayerController.deleteById);

    //update one
    app.put("/api/player/edit/:_id", PlayerController.update);
}

module.exports = registerPlayerRoutes