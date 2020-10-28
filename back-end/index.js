const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

mongoose.connect('mongodb+srv://rk:190031187@first.cpozf.mongodb.net/mealmate?retryWrites=true&w=majoritys',{useNewUrlParser: true , useUnifiedTopology: true});

const connection = mongoose.connection;

connection.once('open', () => console.log("connected to the mongodb"));

const app = express();

app.use(cors());
app.use(bodyParser.json());
const port = process.env.port || 3000;


const FoodRoute=require('./routes/detailsRoute');
const KitchenRoute=require('./routes/kitchentoolsRoute');

app.use('/food',FoodRoute);
app.use('/kitchen',KitchenRoute);

app.listen(port, () => console.log(`running on the server ${port}`));