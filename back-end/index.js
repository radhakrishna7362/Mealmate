const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const connection = mongoose.connection;
const app = express();
const port = process.env.PORT || 3000;

mongoose.connect('mongodb+srv://rk:190031187@first.cpozf.mongodb.net/mealmate?retryWrites=true&w=majority',{useNewUrlParser: true , useUnifiedTopology: true});

connection.once('open', () => console.log("connected to the mongodb"));

const FoodRoute=require('./routes/detailsRoute');
const KitchenRoute=require('./routes/kitchentoolsRoute');
const FoodDonation=require('./routes/food_donationRoute');
const FallWineBundle=require('./routes/fall_wine_bundleRoute');
const EssentialWine=require('./routes/essential_wineRoute');
const UserRoute=require('./routes/userRoute');
const CartRoute=require('./routes/cartRoute');
const OrderRoute=require('./routes/orderRoute');
const ContactRoute=require('./routes/contactRoute');

app.use(cors());
app.use(bodyParser.json());
app.use('/food',FoodRoute);
app.use('/kitchen',KitchenRoute);
app.use('/fooddonation',FoodDonation);
app.use('/fallwinebundle',FallWineBundle);
app.use('/essentialwine',EssentialWine);
app.use('/user',UserRoute);
app.use('/cart',CartRoute);
app.use('/order',OrderRoute);
app.use('/contact',ContactRoute)

app.listen(port, () => console.log(`running on the server ${port}`));