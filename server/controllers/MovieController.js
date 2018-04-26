let Movie = require("mongoose").model("Movie");

class MovieController{
    all(req, res){
        Movie.find({},(err,movies) => {
            if(movies){
                return res.json(movies);
            }
            else{
                return res.json({erros:"Failed to retrieve movies"})
            }
        });
    }

    create(req, res){
        console.log(req.body);
        Movie.findOne({name: req.body.name}, (err, movie)=>{
            if(movie){
                return res.json({error: "Movie is already in the database"})
            }else{
                Movie.create(req.body,(err, movie)=>{
                    console.log(req.body);
                    if (err){
                        return res.json(err)
                    } 
                    else {
                        return res.json(movie)
                    }
                })

            }
        })
        
    }
    
    update(req, res){
        console.log(req.params.id);
        console.log(req.body);
        Movie.findOne({name:req.body.name},(err,movie)=> {
            if (err) {
                console.log(err);
            } else {
                console.log(movie);
                if (movie) {
                    return res.json({error: "Movie is already in the database"})
                } else {
                    Movie.update({_id:req.params.id},req.body,(err, rawData)=>{
                        if (err){
                            return res.json(err);
                        } 
                        else {
                            return res.json(true);
                        } 
                    })
                }
                
            }
        })

           
    }

    delete(req, res){
        console.log("Serve > Delete '/movie/:id' > id", req.params.id);
        Movie.deleteOne({_id:req.params.id},(err, data)=>{
            if (err) {
             return  res.json(err)
            }
            else {
                return res.json(true) 
            }
        })
    }

    findAMovie(req, res) {
        console.log(req.params)
        Movie.findOne({_id: req.params.id}, function(err, movie) {                // NOT SURE WHAT THE ERR WOULD BE ; {} will return all data.
            if (err) {
                console.log("No Movie");
                res.json({message: "Error", error: err});
            } else {
                res.json({message: "Success", data: movie});     // HOW TO PASS INFO TO HTML???
            }
        })
    }

  
    


}

module.exports = new MovieController();