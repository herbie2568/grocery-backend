const mongoose = require('mongoose')

const grocerySchema = new mongoose.Schema({
  name: String,
  image: String,
  description: String,
  price: String,
  inStock: Boolean,
  tag: [String],
  delivery: Boolean

})

const Groceries = mongoose.model('Grocery', grocerySchema)

module.exports = Groceries
