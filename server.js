const express = require('express');
const mongoose = require ('mongoose');
const session = require('express-session')

const cors = require('cors')
const app = express ();
require('dotenv').config()
const db = mongoose.connection;

const groceryController = require('./controllers/grocery.js')
const reviewsController = require('./controllers/reviews.js')
const userController = require('./controllers/users.js')


const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI;
const SECRET = process.env.SECRET
mongoose.connect(MONGODB_URI);

//Middleware
app.use(express.json())
app.use(cors())
app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false
  })
)


const isAuthenticated = (req, res, next) => {
  if (req.session.currentUser) {
    return next()
  } else {
    res.redirect('/')
  }
}

// app.use('/sessions', sessionsController)
app.use('/users', userController)
app.use('/groceries', groceryController)
app.use('/reviews', reviewsController)

app.get('/' , (req, res) => {
  res.send('Hello World!');
});

app.get('/both', (req,res) =>{
  res.send('okay it works')
} )


db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', MONGODB_URI));
db.on('disconnected', () => console.log('mongo disconnected'));


app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
