const express = require('express')
const router = express.Router()
const Reviews = require('../models/reviews.js')

router.get('/', (req, res) => {
  Reviews.find({}, (err, foundGroceries)=>{
      res.json(foundGroceries);
  });
})

router.post('/', (req, res) => {
  Reviews.create(req.body, (err, createdGroceries) => {
      res.json(createdGroceries)
  })
})

router.delete('/:id', (req, res)=>{
    Reviews.findByIdAndRemove(req.params.id, (err, deletedGroceries)=>{
        res.json(deletedGroceries);
    });
});

router.put('/:id', (req, res)=>{
    Reviews.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedGroceries)=>{
        res.json(updatedGroceries);
    });
});


module.exports = router
