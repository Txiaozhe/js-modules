'use strict';

const assert = require('assert');

function twoSum(nums, target) {
  for (let at = 0; at < nums.length; at++) {
    for (let bt = at + 1; bt < nums.length; bt++) {
      if (nums[at] + nums[bt] === target) {
        return [at, bt];
      }
    }
  }

	return [];
}

describe('Test Two Sum', () => {
  it('Test 1', () => {
    assert.deepStrictEqual(twoSum([2, 7, 11, 15], 9), [0, 1]);
  });

  it('Test 2', () => {
    assert.deepStrictEqual(twoSum([2, 8, 6, 3], 14), [1, 2]);
  });
});

console.log(twoSum([2, 7, 11, 15], 9))
