let Rev = require("mongoose").model("Review");
let Movie = require("mongoose").model("Movie")

class ReviewController{
    all(req, res){
        console.log(req.params)
        console.log("flklajdflkjakdlfjalkdfjl")
        Rev.find({movie_id:req.params.id},(err,reviews) => {
            if(reviews){
                return res.json(reviews);
            }
            else{
                return res.json({errors:"Failed to retrieve reviews"})
            }
        });
    }

    create(req, res){
        Rev.create(req.body,(err, review)=>{
            console.log(req.body);
            if (err){
                return res.json(err)
            } 
            return res.json(review)
        })


      
    }

    delete(req, res){
        console.log("Serve > Delete '/movie/:id' > id", req.params.id);
        Rev.deleteOne({_id:req.params.id},(err, data)=>{
            if (err) {
             return  res.json(err)
            }
            else {
                return res.json(true) 
            }
        })
    }

}

module.exports = new ReviewController();