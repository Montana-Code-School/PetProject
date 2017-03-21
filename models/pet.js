// since you are using babel-node on the server, you can use import - Harold
let mongoose = require("mongoose");

let PetSchema = new mongoose.Schema({
  url: String,
  animalId: Number,
  name: String,
  mainPhoto: String,
  species: String,
  breed: String,
  age: String,
  gender: String,
  size: String,
  color: String,
  spayNeuter: Boolean,
  declawed: Boolean,
  intakeDate: String,
  description: String
});

module.exports = mongoose.model('Pet', PetSchema);
