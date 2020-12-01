const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let kitchentool = new Schema({
    name: {
        type: String,
        required: true
    },
    price:{
        type:Number,
        required:true
    },
    summary: {
        type:String ,
        required: true
    },
    details: [{
        msg:{
            type:String,
            required:true
        }
    }],
    returnpolicy:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    }
});

kitchentool = mongoose.model("kitchentools", kitchentool);

module.exports = kitchentool;