'use strict';

const _ = require('lodash');

const object = { 'a': 1 };
 
console.log(_.identity(object, 1) === object);
console.log(_.identity(object, 1));
