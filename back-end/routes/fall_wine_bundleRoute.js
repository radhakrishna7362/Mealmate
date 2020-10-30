const express=require('express');

const FallWineBundle=express.Router();

const FallWine=require('../models/kitchentools');

FallWineBundle.route('/menu').get((req,res,next) => {
    FallWine.find({})
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));
});

FallWineBundle.route('/home').get((req,res,next) => {
    FallWine.find({}).limit(3)
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));
});

FallWineBundle.route('/particular/:id').get((req,res,next) => {
    FallWine.find({id:req.params.id})
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));
});

module.exports = FallWineBundle;