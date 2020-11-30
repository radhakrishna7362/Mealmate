const mongoose = require('mongoose');

const Schema = mongoose.Schema
let feedbackSchema = new Schema({
    name :{
        type:String,
        required:true
    },
    email : {
        type:String,
        required:true
    },
    phone :{
        type:String,
        required:true
    },
    feedback :{
        type:String,
        required:true
    }
})

feedbackSchema=mongoose.model("feedbacks",feedbackSchema);

module.exports=feedbackSchema;