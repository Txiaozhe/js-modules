'use strict';

const assert = require('assert');

function run(dealy = 3000) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(dealy);
        }, dealy);
    })
}

describe('SyncSignupHistories', () => {
    before(done => {
        console.log('done1');
        done();
        console.log('done2');
    });
  
    it('implement tests here', done => {
      return run().then(response => {
        assert(response);
      });
    });
});