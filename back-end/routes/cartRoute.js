const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const Cart=require('../models/cart');
const express=require('express');

const CartRoute=express.Router();

CartRoute.route('/add').post((req, res) => {
    console.log(req.body);
    let cart = new Cart({
      UserId : req.body.userid,
      ProductId : req.body.productid,
      Qty:req.body.qty
    })
    Cart.findOne({UserId:req.body.userid,ProductId:req.body.productid},(err,u)=>{
        if(err){
            return res.status(500).send(err);
        }
        if(u){
            return res.status(409).send("Already in the cart")
        }
        else{
            cart.save((error, c) => {
                if (error) {
                    return res.status(401).send("Error adding to cart");
                } else {
                    return res.status(200).send("Added to cart")
                }
            })
        }
    })
})

CartRoute.route('/get/:id').get((req,res)=>{
    console.log(req.params.id)
    Cart.find({UserId:req.params.id})
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));
})

module.exports=CartRoute;