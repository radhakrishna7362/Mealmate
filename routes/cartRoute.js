const Cart=require('../models/cart');
const express=require('express');

const CartRoute=express.Router();

CartRoute.route('/add').post((req, res) => {
    Cart.findOne({userid:req.body.userid,productid:req.body.productid},(err,u)=>{
        if(err){
            return res.status(500).send(err);
        }
        if(u){
            return res.status(409).send("Already in the cart")
        }
        else{
            Cart.create(req.body)
            .then((resp) => {
                res.setHeader('Content-Type', 'application/json');
                res.status(200).send("Added to cart")
            }, (err) => res.status(401).send("Error adding to cart"))
            .catch((err) => res.status(401).send("Error adding to cart"));
        }
    })
})

CartRoute.route('/get/:id').get((req,res,next)=>{
    Cart.find({userid:req.params.id})
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));
})

CartRoute.route('/remove/:id').delete((req,res,next)=>{
    Cart.deleteOne({_id:req.params.id})
    .then((resp) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).send("Removed Successfully")
    }, (err) => next(err))
    .catch((err) => next(err));
})

CartRoute.route('/removeAll/:userid').delete((req,res,next)=>{
    Cart.deleteMany({userid:req.params.userid})
    .then((resp) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).send("Removed Successfully")
    }, (err) => next(err))
    .catch((err) => next(err));
})

module.exports=CartRoute;