const mongoose = require('mongoose');

const Schema = mongoose.Schema
let userSchema = new Schema({
    username:{
        type:String,
        required:true
    },
    name :{
        type:String,
        required:true
    },
    email : {
        type:String,
        required:true
    },
    password :{
        type:String,
        required:true
    },
    address: String,
    city: String,
    state: String,
    gender: String,
    pincode: String,
    dob: String,
    phone: Number,
    aboutme: String
})

userSchema=mongoose.model("users",userSchema);

module.exports=userSchema;