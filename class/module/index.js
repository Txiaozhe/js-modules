'use strict';

const assert = require('assert');
const fun1 = require('./test1');

const {test1, test2} = require('./test2');

fun1.on('ready', () => console.log('module ready'));

console.log(module);
test1();
test2();

describe('test require.resolve', () => {
  it('os should be a native', () => {
    assert(require.resolve('os'), 'os');
  });

  it('bluebird should be a third part', () => {
    assert(require.resolve('bluebird'), 'bluebird');
  });

  it('test1 should be a personal', () => {
    assert(require.resolve('./test1'), '/Users/jimtang/GitHub/js-modules/module/test1.js');
  });
});
