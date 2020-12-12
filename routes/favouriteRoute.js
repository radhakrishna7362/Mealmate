const Favourite=require('../models/favourite');
const express=require('express');

const FavouriteRoute=express.Router();

FavouriteRoute.route('/add').post((req, res) => {
    Favourite.findOne({userid:req.body.userid,productid:req.body.productid},(err,u)=>{
        if(err){
            return res.status(500).send(err);
        }
        if(u){
            return res.status(409).send("Already in the Favourite")
        }
        else{
            Favourite.create(req.body)
            .then((resp) => {
                res.setHeader('Content-Type', 'application/json');
                res.status(200).send("Added to Favourite")
            }, (err) => res.status(401).send("Error adding to Favourite"))
            .catch((err) => res.status(401).send("Error adding to Favourite"));
        }
    })
})

FavouriteRoute.route('/get/:id').get((req,res,next)=>{
    Favourite.find({userid:req.params.id})
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));
})

FavouriteRoute.route('/remove/:id').delete((req,res,next)=>{
    Favourite.deleteOne({_id:req.params.id})
    .then((resp) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).send("Removed Successfully")
    }, (err) => next(err))
    .catch((err) => next(err));
})

FavouriteRoute.route('/removeAll/:userid').delete((req,res,next)=>{
    Favourite.deleteMany({userid:req.params.userid})
    .then((resp) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).send("Removed Successfully")
    }, (err) => next(err))
    .catch((err) => next(err));
})

module.exports=FavouriteRoute;