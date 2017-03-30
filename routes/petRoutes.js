import React from 'react';
import webpack from 'webpack';
// Best to be consistent and use import instead of require below - Harold
const Pet = require ('../models/pet');
let express = require('express');
let router = express.Router();


router.use(function(req, res, next){
  console.log('something is happening!');
  res.setHeader('Content-Type', 'application/json');
  next();
});

router.route('/petsdata')

.get(function(req, res, next){
  Pet.find({"adopted": "false"}, function(err, pets){
    if(err){
      next(err);
    } else {
      res.json(pets);
    }
  });
});

export default router;
