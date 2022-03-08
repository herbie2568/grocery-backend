const mongoose = require('mongoose')
const Schema = mongoose.Schema

const cartSchema = new Schema ({
  name: String,
  image: String,
  description: String,
  price: String,
  inStock: Boolean,
  tag: [String],
  delivery: Boolean

})

const Cart = mongoose.model('Cart', cartSchema)

module.exports = Cart
