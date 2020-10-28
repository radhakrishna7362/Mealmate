const express=require('express');

const Kitchen=express.Router();

const KitchenTool=require('../models/kitchentools');

Kitchen.route('/menu').get((req,res,next) => {
    KitchenTool.find({})
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));
});

Kitchen.route('/home').get((req,res,next) => {
    KitchenTool.find({}).limit(3)
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));
});

Kitchen.route('/particular/:id').get((req,res,next) => {
    KitchenTool.find({id:req.params.id})
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));
});

module.exports = Kitchen;