'use strict';
const mongodModel = require('../schemas/index');

module.exports = {
    //drop
    drop: () => {
        try {
            mongodModel.usersModel.collection.drop();
        } catch (error) {
            console.log(error);
        }

    },

    //批量插入
    batchInsert: async(arr) => {
        try {
            await mongodModel.usersModel.insertMany(arr);
        } catch (error) {
            console.log(error);
        }

    },
    //基础分页
    standardPagination: async(page, limit) => {
        try {
            return await mongodModel.usersModel.find().skip((parseInt(page) - 1) * limit).limit(limit);
        } catch (error) {
            console.log(error);
        }
    },
    //slice
    slice: async() => {
        try {
            return await mongodModel.usersModel.findOne().where('class').slice(1);
        } catch (error) {
            console.log(error);
        }
    }
};