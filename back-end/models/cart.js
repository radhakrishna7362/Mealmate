const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let cart = new Schema({
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
        type:String,
        required:true
    }
});

cart = mongoose.model("carts", cart);
module.exports = cart;