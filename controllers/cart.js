const express = require('express')
const router = express.Router()
const Cart = require('../models/cart.js')

router.get('/', (req, res) => {
  Cart.find({}, (err, foundCart)=>{
      res.json(foundCart);
  });
})

router.post('/', (req, res) => {
  Cart.create(req.body, (err, createdCart) => {
      res.json(createdCart)
  })
})

router.delete('/:id', (req, res)=>{
    Cart.findByIdAndRemove(req.params.id, (err, deletedCart)=>{
        res.json(deletedCart);
    });
});

router.put('/:id', (req, res)=>{
    Cart.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedCart)=>{
        res.json(updatedCart);
    });
});


module.exports = router
