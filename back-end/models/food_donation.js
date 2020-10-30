const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let food_donation = new Schema({
    fname:{
        type:String,
        required:true
    },
    lname:{
        type:String,
        required:true
    },
    add1:{
        type:String,
        required:true
    },
    add2:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    pincode:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    }
});

food_donation = mongoose.model("foodDonation", food_donation);

module.exports = food_donation;