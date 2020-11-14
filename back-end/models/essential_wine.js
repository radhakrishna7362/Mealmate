const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let essential_wine = new Schema({
    id:{
        type:Number,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    summary:[{
        msg:{
            type:String,
            required:true
        }
    }]
});

essential_wine = mongoose.model("essential_wines", essential_wine);
module.exports = essential_wine;