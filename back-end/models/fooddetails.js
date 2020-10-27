const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let fooddetail = new Schema({
    id: {
        type:Number,
        required: true
    },
    title: {
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
        type:String,
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