const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

mongoose.connect('mongodb+srv://rk:190031187@first.cpozf.mongodb.net/mealmate?retryWrites=true',{useNewUrlParser: true , useUnifiedTopology: true});

const connection = mongoose.connection;

connection.once('open', () => console.log("connected to the mongodb"));

const app = express();

app.use(cors());
app.use(bodyParser.json());
const port = process.env.port || 3000;


const FoodRoute=require('./routes/detailsRoute');
const KitchenRoute=require('./routes/kitchentoolsRoute');
const FoodDonation=require('./routes/food_donationRoute');
const FallWineBundle=require('./routes/fall_wine_bundleRoute');

app.use('/food',FoodRoute);
app.use('/kitchen',KitchenRoute);
app.use('/fooddonation',FoodDonation);
app.use('/fallwinebundle',FallWineBundle);

app.listen(port, () => console.log(`running on the server ${port}`));