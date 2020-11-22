const express=require('express');

const Contact=express.Router();

const Feedback=require('../models/contactus');

Contact.route('/feedback').post((req,res,next) => {
    Feedback.create(req.body)
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));
});

module.exports = Contact;