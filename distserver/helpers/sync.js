"use strict";

//You scrape petango and you get one pet object back.
//You want to look that pet up in your database by animalId.
var Pet = require('../models/pet');
var sync = {};

sync.syncPets = function (arr) {
  var _this = this;

  console.log("we are syncing");
  var scrapedAnimalIds = arr.map(function (pet) {
    return pet.animalId;
  });
  Pet.find({}, function (err, docs) {
    for (var i = 0; i < docs.length; i++) {
      if (scrapedAnimalIds.indexOf(docs[i].animalId) === -1) {
        this.removeAdoptedPets(docs[i]);
      }
    }
  }.bind(this));
  //loop over pet objects in array

  var _loop = function _loop(i) {
    //look up pet in database by animalID
    Pet.findOne({ animalId: arr[i].animalId }, function (err, doc) {
      if (doc === null) {
        this.saveNewPets(arr[i]);
      }
      //else a dog exsited both in the scrape and the database and
      //we're ignoring it for now.
    }.bind(_this));
  };

  for (var i = 0; i < arr.length; i++) {
    _loop(i);
  }
};

sync.saveNewPets = function (pet) {
  new Pet(pet).save(function (err, pet, next) {
    console.log(pet.name + " was saved");
  });
};

//look up a the pet object by animalId in the database and delete it from
//the database
sync.removeAdoptedPets = function (pet) {
  console.log(pet.animalId);
  Pet.remove({ animalId: pet.animalId }, function (err) {
    console.log(pet.name + " was adopted! :)");
  });
};

module.exports = sync;