const express = require('express')
const router = express.Router()
const Groceries = require('../models/grocery.js')

router.get('/', (req, res) => {
  Groceries.find({}, (err, foundGroceries)=>{
      res.json(foundGroceries);
  });
})

router.post('/', (req, res) => {
  Groceries.create(req.body, (err, createdGroceries) => {
      res.json(createdGroceries)
  })
})

router.delete('/:id', (req, res)=>{
    Groceries.findByIdAndRemove(req.params.id, (err, deletedGroceries)=>{
        res.json(deletedGroceries);
    });
});

router.put('/:id', (req, res)=>{
    Groceries.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedGroceries)=>{
        res.json(updatedGroceries);
    });
});


module.exports = router
