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
    FoodDetail.find({id:req.params.id})
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));
});

// SigninRouter.route('/adduser').post((req,res,next) => {
//     User.create(req.body)
//     .then((resp) => {
//         console.log('new responce ', resp);
//         res.statusCode = 200;
//         res.setHeader('Content-Type', 'application/json');
//         res.json(resp);
//     }, (err) => next(err))
//     .catch((err) => next(err));
// });

// SigninRouter.route('/update/:email').put((req,res,next) => {
//     User.findOneAndUpdate({email : req.params.email}, {
//         $set: req.body
//     }, { new: true })
//     .then((resp) => {
//         res.statusCode = 200;
//         res.setHeader('Content-Type', 'application/json');
//         res.json(resp);
//     }, (err) => next(err))
//     .catch((err) => next(err));
// });

// SigninRouter.route('/delete/:email').delete((req,res,next) =>{
//     User.findOneAndDelete({email: req.params.email})
//     .then((resp) => {
//         res.statusCode = 200;
//         res.setHeader('Content-Type', 'application/json');
//         res.json(resp);
//     }, (err) => next(err))
//     .catch((err) => next(err));
// });

// SigninRouter.route('/getuser/:email/:password').get((req,res,next) => {
//     User.find({email: req.params.email,password : req.params.password})
//     .then((resp) => {
//         res.statusCode = 200;
//         res.setHeader('Content-Type', 'application/json');
//         res.json(resp);
//     }, (err) => next(err))
//     .catch((err) => next(err));
// });

module.exports = Food;