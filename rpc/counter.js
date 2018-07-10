/**
 * Creator: Tang Xiaoji
 * Time: 2018-07-10
 */

'use strict';

let count = 0;

class Counter {
  constructor() {
    this.counter = () => count;
    this.plus = (c = 1) => {
      count += c;
      return count
    };
    this.reduce = (c = 1) => count -= c;
  }
}

module.exports = new Counter();
