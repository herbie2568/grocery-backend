const mongoose = require('mongoose')

const reviewsSchema = new mongoose.Schema({
  name: String,
  subject: String,
  image: String,
  description: String
})

const Reviews = mongoose.model('Review', reviewsSchema)

module.exports = Reviews
