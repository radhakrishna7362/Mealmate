const express=require('express');

const Food=express.Router();

const FoodDetail=require('../models/fooddetails');

Food.route('/menu').get((req,res,next) => {
    FoodDetail.find({})
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));
});

Food.route('/home').get((req,res,next) => {
    FoodDetail.find({}).limit(3)
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));
});

Food.route('/particular/:id').get((req,res,next) => {
    FoodDetail.find({_id:req.params.id})
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));
});

module.exports = Food;