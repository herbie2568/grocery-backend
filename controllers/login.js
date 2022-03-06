const express = require('express')
const router = express.Router()
const Login = require('../models/login.js')

router.get('/', (req, res) => {
  Login.find({}, (err, foundLogin)=>{
      res.json(foundLogin);
  });
})

router.post('/', (req, res) => {
  Login.create(req.body, (err, createdLogin) => {
      res.json(createdLogin)
  })
})

router.delete('/:id', (req, res)=>{
    Login.findByIdAndRemove(req.params.id, (err, deletedLogin)=>{
        res.json(deletedLogin);
    });
});

router.put('/:id', (req, res)=>{
    Login.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedLogin)=>{
        res.json(updatedLogin);
    });
});


module.exports = router
