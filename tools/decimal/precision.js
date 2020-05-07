'use strict';

const { Decimal } = require('decimal.js');

console.log(0.3 - 0.1);

const x = new Decimal(0.3);
console.log(x.minus(0.1).toNumber());
