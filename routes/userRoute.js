const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const User=require('../models/user');
const express=require('express');
const secret='7362SecretKey';

const UserRoute=express.Router();


var decodedToken='';
function verifyToken(req, res, next) {
    let token=req.query.token;
    jwt.verify(token,secret,(err,tokendata)=>{
        if(err)
            return res.status(401).send('Unauthorized request')
        if(tokendata){
            decodedToken=tokendata
            next()
        }
    })
}

UserRoute.route('/register').post((req, res) => {
    let user = new User({
        username: req.body.username,
        name : req.body.name,
        email : req.body.email,
        password : bcrypt.hashSync(req.body.password, 10),
        address: "",
        city: "",
        state: "",
        gender:"",
        pincode: "",
        dob: "",
        phone: "",
        aboutme: "" 
    })
    User.findOne({email:req.body.email},(error,u)=>{
        if(u)
        return res.status(409).send('Email Already Exists');
        else{
            user.save((error, registeredUser) => {
                if (error) {
                    
                } else {
                    let token =  jwt.sign({id:registeredUser._id}, secret)
                    res.status(200).send({token})
                }
            })
        }
    })  
})

UserRoute.route('/login').post((req, res) => { 
    User.findOne({email: req.body.email}, (error, u) => {
        if (error) {
        } else {
           if (!u) {
            User.findOne({username: req.body.email}, (error, u) => {
                if (error) {
                } else {
                   if (!u) {
                      res.status(401).send("Invalid Email or Username...!")
                   } else if (bcrypt.compareSync(req.body.password, u.password)){
                      let token =  jwt.sign({id:u._id}, secret) 
                      res.status(200).send({token})  
                   } else {
                      res.status(401).send("Invalid Password...!")
                   }
                }
            })
           } else if (bcrypt.compareSync(req.body.password, u.password)){
              let token =  jwt.sign({id:u._id}, secret) 
              res.status(200).send({token})  
           } else {
              res.status(401).send("Invalid Password...!")
           }
        }
    })
})

UserRoute.route('/userid').get(verifyToken,(req,res,next)=>{
    return res.status(200).json(decodedToken.id)
})

UserRoute.route('/username/:id').get((req,res,next)=>{
    User.findOne({_id:req.params.id})
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp.name);
    }, (err) => next(err))
    .catch((err) => next(err));
})

UserRoute.route('/profile/:id').get((req,res,next)=>{
    User.findOne({_id:req.params.id})
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));
})

UserRoute.route('/edit-profile/:id').patch((req,res,next)=>{
    User.findById(req.params.id,(err,data)=>{
        if (err) next(err)
        else {
        data.username=req.body.username;
        data.name=req.body.name;
        data.address=req.body.address;
        data.city=req.body.city;
        data.state=req.body.state;
        data.pincode=req.body.pincode;
        data.dob=req.body.dob;
        data.phone=req.body.phone;
        data.email=req.body.email;
        data.gender=req.body.gender;
        data.aboutme=req.body.aboutme;
        data
          .save()
          .then((data) => {
            res.json("Edit Done");
          })
          .catch((err) => res.status(409).send("failed"));
        }
  });
})

module.exports=UserRoute;