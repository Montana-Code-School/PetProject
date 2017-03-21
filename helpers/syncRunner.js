//We are starting this with two dogs in the database: Baltazaar and Loki.
//In the scrape we are sending two dog objects: Baltazaar and Loretta.
  //Loretta does not exist in the database and needs to be added.
//Loki is not in the scrape and needs to be removed from the database.
//Baltazaar is in both the scrape and the DB so he should stay put.

// since you are using babel-node on the server, you can use import - Harold
let mongoose = require("mongoose");
let uriUtil = require('mongodb-uri');
mongoose.Promise = global.Promise;
let mongodbUri = process.env.MONGODB_URI || 'mongodb://localhost/petsdata';
let mongooseUri = uriUtil.formatMongoose(mongodbUri);
let options = {
  server: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } },
  replset: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } }
};
mongoose.connect(mongooseUri, options);
let syncRunner = require('./sync');
let Pet = require('../models/pet');

//This is Baltazaar and he is in the database and in the scrape
let baltazaar =
  { animalId: 34790773,
  mainPhoto: '//media.petango.com/sms/photos/1095/11d1877d-8611-4f53-90db-0621d709b317.jpg',
  name: 'Baltazaar',
  species: 'Dog',
  breed: 'Akita/Mix',
  age: '1 year  1 month 16 days',
  gender: 'Male',
  size: 'Large',
  color: 'Tan/Black',
  spayNeuter: true,
  declawed: 'No',
  intakeDate: '2/5/2017',
  description: 'Let me introduce myself, my name is Baltazaar.' };

//Loki only exists in the database not in the scrape
let loki =
  { animalId: 34680077,
   mainPhoto: '//media.petango.com/sms/photos/1095/ab3b6f68-dbc5-42c5-bd23-9d40922ec9c6.jpg',
   name: 'Loki',
   species: 'Dog',
   breed: 'Shepherd/Chinese Shar-Pei',
   age: '3 years  1 month 3 days',
   gender: 'Male',
   size: 'Large',
   color: 'Red/Brown',
   spayNeuter: true,
   declawed: 'No',
   intakeDate: '2/17/2017',
   description: 'Woof'
 };

let loretta =
  { animalId: 33927386,
  mainPhoto: '//media.petango.com/sms/photos/1095/16b208ca-e425-4994-9b8e-d9aab96d0ddf.jpg',
  name: 'Loretta(Ariel)',
  species: 'Dog',
  breed: 'Great Pyrenees/Mix',
  age: '2 years 4 months 15 days',
  gender: 'Female',
  size: 'Large',
  color: 'White',
  spayNeuter: false,
  declawed: 'No',
  intakeDate: '3/10/2017',
  description: 'I am super cute'
};

let scrapeArray = [baltazaar, loretta];

// Delete every record from the database before we make a test run
Pet.remove({}, function(err, pet){
  new Pet(baltazaar).save(function(err, pet, next){
    new Pet(loki).save(function(err, pet, next){
      syncRunner.syncPets(scrapeArray);
    });
  });
});
