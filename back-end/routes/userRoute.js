const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const User=require('../models/user');
const express=require('express');

const UserRoute=express.Router();


var decodedToken='';
function verifyToken(req, res, next) {
    let token=req.query.token;
    console.log(token);
    jwt.verify(token,'112SecretKey',(err,tokendata)=>{
        if(err)
            return res.status(401).send('Unauthorized request')
        if(tokendata){
            decodedToken=tokendata
            console.log(decodedToken)
            next()
        }
    })
}

UserRoute.route('/register').post((req, res) => {
    let user = new User({
      username : req.body.username,
      email : req.body.email,
      password : bcrypt.hashSync(req.body.password, 10)
    })
    User.findOne({email:req.body.email},(error,u)=>{
        if(u)
        return res.status(409).send('Email Already Exists');
        else{
            user.save((error, registeredUser) => {
                if (error) {
                    console.log("Error While Registering User To Database...!\n" + error)
                } else {
                    let token =  jwt.sign({id:registeredUser._id}, '112SecretKey')
                    res.status(200).send({token})
                }
            })
        }
    })  
})

UserRoute.route('/login').post((req, res) => { 
    User.findOne({username: req.body.username}, (error, u) => {
        if (error) {
            console.log( error)
        } else {
           if (!u) {
              res.status(401).send("Invalid Email...!")
           } else if (bcrypt.compareSync(req.body.password, u.password)){
              let token =  jwt.sign({id:u._id}, '112SecretKey') 
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
        res.json(resp.username);
    }, (err) => next(err))
    .catch((err) => next(err));
})

module.exports=UserRoute;