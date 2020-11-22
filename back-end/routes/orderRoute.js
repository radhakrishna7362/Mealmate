const Order=require('../models/order');
const express=require('express');

const OrderRoute=express.Router();

OrderRoute.route('/move').post((req, res) => {
    Order.create(req.body)
    .then((resp) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).send("Order placed")
    }, (err) => res.status(500).send("Error placing the order"))
    .catch((err) => res.status(500).send("Error placing the order"));
})

OrderRoute.route('/orders/:userid').get((req,res,next)=>{
    Order.find({userid:req.params.userid})
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));
})

module.exports=OrderRoute;