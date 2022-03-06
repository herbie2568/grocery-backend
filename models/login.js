const mongoose = require('mongoose')

const loginSchema = new mongoose.Schema({
  email: String,
  username: String,
  password: String
})

const Login = mongoose.model('Login', loginSchema)

module.exports = Login
