const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let order = new Schema({
    userid:{
        type:Schema.Types.ObjectId,
        required:true
    },
    productid:{
        type:Number,
        required:true
    },
    qty:{
        type:Number,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    date: {
        type: Date,
        default: Date.now(),
    }
});

order = mongoose.model("orders", order);
module.exports = order;