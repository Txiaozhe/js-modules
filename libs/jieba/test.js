/**
 * Creator: Tang Xiaoji
 * Time: 2018-07-10
 */

'use strict';

const stop_word = require('./trim_word');
const nodejieba = require("nodejieba");

console.time('split');
const result = nodejieba.cut("今晚吃鸡");
console.timeEnd('split');
console.log(result);
let stop = [];
let ok = [];

console.time('trim');
result.forEach(w => {
  if (stop_word[w] === 1) {
    stop.push(w);
  } else {
    ok.push(w);
  }
});

console.log(stop, ok);
console.timeEnd('trim');