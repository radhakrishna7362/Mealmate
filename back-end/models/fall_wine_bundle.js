const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let fall_wine_bundle = new Schema({
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

fall_wine_bundle = mongoose.model("fall_wine_bundles", fall_wine_bundle);

module.exports = fall_wine_bundle;