const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const compression=require('compression');
const dotenv=require('dotenv');
const helmet=require('helmet');
const path=require('path');
const connection = mongoose.connection;
const app = express();
dotenv.config({path:"./config.env"});
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
const FavouriteRoute=require('./routes/favouriteRoute');
const OrderRoute=require('./routes/orderRoute');
const ContactRoute=require('./routes/contactRoute');

app.use(compression());
app.use(express.static(process.cwd() + "/mealmate/dist/mealmate"));
app.use(
    helmet.contentSecurityPolicy({
      directives: {
        defaultSrc: ["'self'", "https:", "http:", "data:", "ws:"],
        baseUri: ["'self'"],
        fontSrc: ["'self'", "https:", "http:", "data:"],
        scriptSrc: ["'self'", "https:", "http:", "blob:"],
        styleSrc: ["'self'", "'unsafe-inline'", "https:", "http:"],
      },
    })
);
app.use(cors());
app.use(bodyParser.json());
app.use('/food',FoodRoute);
app.use('/kitchen',KitchenRoute);
app.use('/fooddonation',FoodDonation);
app.use('/fallwinebundle',FallWineBundle);
app.use('/essentialwine',EssentialWine);
app.use('/user',UserRoute);
app.use('/cart',CartRoute);
app.use('/favourite',FavouriteRoute);
app.use('/order',OrderRoute);
app.use('/contact',ContactRoute)

app.get("*", (req, res) => { 
    res.sendFile(path.resolve(process.cwd() + "/mealmate/dist/mealmate/index.html"));
});

app.listen(port, () => console.log(`running on the server ${port}`));