let mongoose = require("mongoose");
let ObjectId = mongoose.Schema.Types.ObjectId;


let r = mongoose.model("Movie", new mongoose.Schema({
    movie_name: {type: String,requred:[true, "Name cannot be blank"], minlength: [3, "Option must be at least three characters."], maxlength:255},
    name: {type:String, requred:true, minlength:3, maxlength:255},
    movie_stars: {type: Number, minlength:[1, "Must have at least one star"], maxlength:5},
    description: {type: String, minlength: [3, "Review must be at least three characters."]},
    reviews: [{type:ObjectId, ref:"Review"}],
    
},
{timestamps:true}));