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
  spayNeuter: String,
  declawed: String,
  intakeDate: String,
  description: String,
  adopted: { type: Boolean, default: false }
});

module.exports = mongoose.model('Pet', PetSchema);
