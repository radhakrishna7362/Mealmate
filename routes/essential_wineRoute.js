const express=require('express');

const EssentialWine=express.Router();

const Wine=require('../models/essential_wine');

EssentialWine.route('/menu').get((req,res,next) => {
    Wine.find({})
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));
});

EssentialWine.route('/home').get((req,res,next) => {
    Wine.find({}).limit(3)
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));
});

EssentialWine.route('/particular/:id').get((req,res,next) => {
    Wine.find({_id:req.params.id})
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));
});

module.exports = EssentialWine;