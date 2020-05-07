'use strict';

console.log('foo require.main: ', require.main.id);
console.log('foo module: ', module.id);
console.log('foo process.mainModule', process.mainModule.id);

module.exports = {};
