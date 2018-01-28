'use strict';
const mongoose = require('mongoose');



let dbSetting = require('config').mongodbInfo.development;

let dbStr = dbSetting.db + '://' + dbSetting.host + ':' + dbSetting.port + '/' + dbSetting.dbname;


let mongodb = mongoose.connect(dbStr, { useMongoClient: true });

mongodb.once('open', () => {
    console.log('mongodb connect');
});
mongodb.on('error', function(error) {
    console.log(error);
});


module.exports = mongodb;