'use strict';

const assert = require('assert');

function mustNumber(nums) {
  let value = 0, count = 0;
  for (const num of nums) {
    if (count === 0) {
      value = num;
      count++;
    } else {
      if (value === num) {
        count++;
      } else {
        count--;
      }
    }
  }

  return value;
}

describe('Test must number', () => {
  it('test 1', () => {
    assert.equal(mustNumber([3, 2, 3]), 3);
  });

  it('test 1', () => {
    assert.equal(mustNumber([2, 2, 1, 1, 1, 2, 2]), 2);
  });
});
