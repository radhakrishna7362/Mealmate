const express=require('express');

const FoodDonation=express.Router();

const DonationForm=require('../models/food_donation');

FoodDonation.route('/addform').post((req,res,next) => {
    DonationForm.create(req.body)
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));
});

module.exports = FoodDonation;