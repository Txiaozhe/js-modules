/**
 * Creator: Tang Xiaoji
 * Time: 2018-07-10
 */

'use strict';

const bluebird = require('bluebird');

const fun = bluebird.promisify((...args) => {
  const cb = args.pop();
  cb(null, 1);
});

fun(1, 2).then(r => console.log(r)).catch(e => console.log(e));
 