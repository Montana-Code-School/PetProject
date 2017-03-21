//You scrape petango and you get one pet object back.
//You want to look that pet up in your database by animalId.

// since you are using babel-node on the server, you can use import - Harold
let Pet = require('../models/pet');
let sync = {};

sync.syncPets = function(arr) {
  let scrapedAnimalIds = arr.map(function(pet) {
    return pet.animalId;
  });
  Pet.find({}, function (err, docs){
    for(let i = 0; i < docs.length; i ++) {
      if(scrapedAnimalIds.indexOf(docs[i].animalId) === -1) {
        this.removeAdoptedPets(docs[i]);
      }
    }
  }.bind(this));
//loop over pet objects in array
  for(let i = 0; i < arr.length; i ++) {
    //look up pet in database by animalID
    Pet.findOne({animalId:arr[i].animalId}, function (err, doc) {
      if(doc === null) {
        this.saveNewPets(arr[i]);
      }
      //else a dog exsited both in the scrape and the database and
      //we're ignoring it for now.
    }.bind(this));
  }
};

sync.saveNewPets = function(pet) {
  new Pet(pet).save(function(err, pet, next) {
    console.log(pet.name + " was saved");
  });
};

sync.removeAdoptedPets = function(pet) {
  console.log(pet.animalId)
  Pet.remove({animalId: pet.animalId }, function(err) {
    console.log(pet.name + " was adopted! :)")
  });
};




module.exports = sync;
