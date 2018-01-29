'use strict';
const path = require('path');
process.env.NODE_CONFIG_DIR = path.join(__dirname, '../config');
const mongoose = require('mongoose');
let dbSetting = require('config').mongodbInfo.development;

let dbStr = dbSetting.db + '://' + dbSetting.host + ':' + dbSetting.port + '/' + dbSetting.dbname;

mongoose.connect(dbStr);
// mongoose.set('debug', true);

let mongodb = mongoose.connection;
mongodb.once('open', () => {
    console.log('mongodb connect');
});
mongodb.on('error', (error) => {
    console.log(error);
});

// mongodb.on('disconnect', () => {
//     console.log('mongodb disconnect');
// });

module.exports = mongoose;