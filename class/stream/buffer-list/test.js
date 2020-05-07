'use strict';

const {inspect} = require('util');
const BufferList = require('./BufferList');

const bl = new BufferList();

bl.push('a');
bl.push('b');
bl.push('c');

console.log(JSON.stringify(bl));

console.log(inspect(bl, {colors: true}));
