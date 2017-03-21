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

let scrapeRunner = require('./scrape');
let syncRunner = require('./sync');

let url = "http://ws.petango.com/Webservices/adoptablesearch/" +
  "wsAdoptableAnimals.aspx?species=Dog&sex=All&agegroup=All&colnum=" +
  "1&authkey=1t4v495156y98t2wd78317102f933h83or1340ptjm31spd04d";

scrapeRunner.scrapePetango(url, function(arr) {
  syncRunner.syncPets(arr);
  console.log(arr);
});
