'use strict';

var mongoose = require("mongoose");
var uriUtil = require('mongodb-uri');
mongoose.Promise = global.Promise;
var mongodbUri = process.env.MONGODB_URI || 'mongodb://localhost/petsdata';
var mongooseUri = uriUtil.formatMongoose(mongodbUri);
var options = {
  server: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } },
  replset: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } }
};
mongoose.connect(mongooseUri, options);

var scrapeRunner = require('./scrape');
var syncRunner = require('./sync');
//
var url = "http://ws.petango.com/Webservices/adoptablesearch/" + "wsAdoptableAnimals.aspx?sex=All&agegroup=All&colnum=" + "1&authkey=1t4v495156y98t2wd78317102f933h83or1340ptjm31spd04d";

setInterval(scrapeAndSync, 3600000);

function scrapeAndSync() {
  scrapeRunner.scrapePetango(url, function (arr) {
    syncRunner.syncPets(arr);
    console.log(arr);
  });
}