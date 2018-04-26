
let mongoose = require("mongoose");
let ObjectId = mongoose.Schema.Types.ObjectId;

let revs = mongoose.model("Review", new mongoose.Schema({
    movie_id:{type: String},
    name: {type: String, minlength: [3, "Name must be at least three characters."], maxlength:255},
    stars: {type: Number, minlength:[1, "Must have at least one star"], maxlength: [5, "Cannot be more than 5 characters"]},
    description: {type: String, minlength: [3, "Review must be at least three characters."]},
    movie:{type:ObjectId, ref:"Movie"}
},{timestamps:true}));