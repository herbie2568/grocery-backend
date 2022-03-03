const express = require('express');
const mongoose = require ('mongoose');
const cors = require('cors')
const app = express ();
require('dotenv').config()
const db = mongoose.connection;

const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI;
const SECRET = process.env.SECRET
mongoose.connect(MONGODB_URI);

app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors())


const groceryController = require('./controllers/grocery.js')
app.use('/groceries', groceryController)

const reviewsController = require('./controllers/reviews.js')
app.use('/reviews', reviewsController)


db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', MONGODB_URI));
db.on('disconnected', () => console.log('mongo disconnected'));

app.listen(PORT, () => console.log( 'Listening on port:', PORT));
