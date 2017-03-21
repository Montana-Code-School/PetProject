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

.post(function(req, res, next){

  let pet = new Pet();

  pet.url = req.body.url;
  pet.animalId = req.body.animalId;
  pet.name = req.body.name;
  pet.mainPhoto = req.body.mainPhoto;
  pet.species = req.body.species;
  pet.breed = req.body.breed;
  pet.age = req.body.age;
  pet.gender = req.body.gender;
  pet.size = req.body.size;
  pet.color = req.body.color;
  pet.spayNeuter = req.body.spayNeuter;
  pet.declawed = req.body.declawed;
  pet.intakeDate = req.body.intakeDate;
  pet.description = req.body.description;

  pet.save(function(err, pets, next){
    if(err){
      return next(err);
    } else {
      res.json(pets);
    }
  });
})

.get( function(req, res, next){
  Pet.find(function(err, pets){
    if(err){
      next(err);

    } else {
      res.json(pets);
    }
  });
});

module.exports = router;
