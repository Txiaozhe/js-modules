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

function twoSum2(nums, target) {
  let i = 0, j = nums.length - 1
  while (i < j) {
    if (nums[i] + nums[j] > target) {
      if (nums[i] > nums[j]) {
        i++
      } else {
        j--
      }
    } else if(nums[i] + nums[j] < target) {
      if (nums[i] > nums[j]) {
        j--
      } else {
        i++
      }
    } else {
      return [i, j]
    }
  }
}

describe('Test Two Sum', () => {
  it('Test 1', () => {
    assert.deepStrictEqual(twoSum([2, 7, 11, 15], 9), [0, 1]);
  });

  it('Test 2', () => {
    assert.deepStrictEqual(twoSum([2, 8, 6, 3], 14), [1, 2]);
  });

  it('Test 3', () => {
    assert.deepStrictEqual(twoSum([3, 2, 4], 6), [1, 2]);
  });
});

describe('Test Two Sum2', () => {
  it('Test 1', () => {
    assert.deepStrictEqual(twoSum2([2, 7, 11, 15], 9), [0, 1]);
  });

  it('Test 2', () => {
    assert.deepStrictEqual(twoSum2([3, 2, 4], 6), [1, 2]);
  });
});
