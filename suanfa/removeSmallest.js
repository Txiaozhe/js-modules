'use strict';

const assert = require('assert');

function removeSmallest(numbers) {
  if (!numbers || !Array.isArray(numbers) || !numbers.length) {
    return [];
  }

  let smallest = numbers[0]
  let smallest_index = 0;
  for (let i = 0; i < numbers.length; i++) {
    let num = numbers[i];
    if (num < smallest) {
      smallest = num;
      smallest_index = i;
    }
  }

  const res = [];
  for (let i = 0; i < numbers.length; i++) {
    if (i !== smallest_index) {
      res.push(numbers[i]);
    }
  }

  return res;
}

describe('removeSmallest', () => {
  it('Test when empty value', () => {
    assert.deepStrictEqual(removeSmallest(), []);
    assert.deepStrictEqual(removeSmallest(''), []);
    assert.deepStrictEqual(removeSmallest(1), []);
    assert.deepStrictEqual(removeSmallest([]), []);
  });

  it("Test works for the examples", function() {
    assert.deepStrictEqual(removeSmallest([1, 2, 3, 4, 5]), [2, 3, 4, 5], "Wrong result for [1, 2, 3, 4, 5]");
    assert.deepStrictEqual(removeSmallest([5, 3, 2, 1, 4]), [5, 3, 2, 4], "Wrong result for [5, 3, 2, 1, 4]");
    assert.deepStrictEqual(removeSmallest([2, 2, 1, 2, 1]), [2, 2, 2, 1], "Wrong result for [2, 2, 1, 2, 1]");
    assert.deepStrictEqual(removeSmallest([]), [], "Wrong result for []");
  });
  
  it("returns [] if the list has only one element", function() {
    for (let i = 0; i < 10; ++i) {
      let x = ~~(Math.random() * 400);
      assert.deepStrictEqual(removeSmallest([x]), [], `Wrong result for ${[x]}`);
    }
  });

  function randomArray(length) {
    return Array.from({length: length}, () => ~~(Math.random() * 400));
  }
  
  it("returns a list that misses only one element", function() {
    for(let i = 0; i < 10; ++i) {
      let arr = randomArray(~~(Math.random() * 10) + 1);
      let l = arr.length;
      assert.deepStrictEqual(removeSmallest(arr).length, l - 1, `Wrong result for ${arr}`);
    }
  });
});
