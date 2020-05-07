'use strict';

// console.log(require.main);
// console.log(module);

console.log('require require.main: ', require.main.id);
console.log('require module: ', module.id);
console.log('require process.mainModule', process.mainModule.id);

require('./foo');
