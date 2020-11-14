const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let cart = new Schema({
    UserId:{
        type:Schema.Types.ObjectId,
        required:true
    },
    ProductId:{
        type:Number,
        required:true
    }
});

cart = mongoose.model("carts", cart);
module.exports = cart;