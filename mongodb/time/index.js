'use strict';
const runTime = require('./util').runTime;
const mongoModel = require('../projects/index');

runTime(mongoModel.batchInsert);