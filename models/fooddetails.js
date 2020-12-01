const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let fooddetail = new Schema({
    name: {
        type: String,
        required: true
    },
    subtitle: {
        type: String,
        required: true
    },
    time:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    servings: {
        type:String ,
        required: true
    },
    calories: {
        type:String ,
        required: true
    },
    image: {
        type:String ,
        required: true
    },
    ingredients: [{
        qty:{
            type:String,
            required:true
        },
        name:{
            type:String,
            required:true
        }
    }],
    ingredientsImg:{
        type:String,
        required:true
    },
    steps: [{
        number:{
            type:String,
            required:true
        },
        desc:{
            type:String,
            required:true
        },
        step:{
            type:String,
            required:true
        },
        img:{
            type:String,
            required:true
        }
    }],
    special:{
        type:String,
        required:true
    }
});

fooddetail = mongoose.model("fooddetails", fooddetail);

module.exports = fooddetail;