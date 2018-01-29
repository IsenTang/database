'use strict';
let mongodb = require('../../util/mongodb').connection;
let mongoose = require('mongoose');

let usersSchema = new mongoose.Schema({
    name: { type: String },
    passcode: { type: String },
    class: {
        name: { type: String }, score: { type: Number }, room: { type: Number }
    }
});

let usersSchemaModel = mongodb.model('users', usersSchema);

module.exports = usersSchemaModel;