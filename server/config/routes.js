let MovieController = require("../controllers/MovieController.js")
let RevController = require("../controllers/ReviewController.js")
let path = require("path");

module.exports = (app) => {
    
    app.get("/movies", MovieController.all);
    app.post("/movies/new", MovieController.create);
    app.post("/movies/:id", MovieController.update);
    app.get("/movie/:id", MovieController.findAMovie);
    app.delete("/movie/:id/destroy", MovieController.delete)

   
    app.get("/reviews/all/:id", RevController.all);
    app.post("/reviews/new", RevController.create);
    app.delete("/review/:id/destroy", RevController.delete)

    
    app.all("*" , (req, res, next) => {
        res.sendFile(path.resolve("./client/dist/index.html"))
    })

}