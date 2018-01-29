const chai = require('chai');
const assertArrays = require('chai-arrays');
const mongod = require('../../../mongodb/projects/index');
const mongoose = require('../../../util/mongodb');
chai.use(assertArrays);
let expect = chai.expect;

describe('mongodb', function() {
    let arr = new Array();
    before(() => {
        let index = 10000;
        for (let i = 0; i < index; i++) {
            arr.push({
                name: `isen${i}`,
                passcode: `123${i}`,
                class: { name: `test${i}`, score: i % 2 === 0 ? 1 : 2, room: i % 3 }
            });
        }
    });

    after(async() => {
        await mongod.drop();
        // await mongoose.connection.close();
    });
    it('批量插入', async() => {
        await mongod.batchInsert(arr);
    });

    it('基础分页', async() => {
        let result = await mongod.standardPagination(1, 10);
        expect(result.length).to.be.equal(10);
    });

    it('slice', async() => {
        await mongod.slice();
    });
});