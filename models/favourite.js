const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let favourite = new Schema({
    userid:{
        type:Schema.Types.ObjectId,
        required:true
    },
    productid:{
        type:Schema.Types.ObjectId,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    router:{
        type:String,
        required:true
    }
});

favourite = mongoose.model("favourites", favourite);
module.exports = favourite;