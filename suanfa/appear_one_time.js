'use strict';

const assert = require('assert');

var singleNumber = function(nums) {
  let ret = 0;
  for (const num of nums) {
      ret ^= num;
  }
  
  return ret;
};

describe('Appear one time', () => {
  it('test1', () => {
    assert.equal(singleNumber([2, 2, 1]), 1);
  });
});
