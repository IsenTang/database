'use strict';
const _ = require('lodash');

module.exports = {
    runTime: async(fn, str) => {
        if (!_.isEmpty(str))
            console.log(str + ':');
        console.time('运行时间：');
        await fn();
        console.timeEnd('运行时间：');
    }
};