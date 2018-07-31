const fun1 = require('./test1');

const {test1, test2} = require('./test2');

fun1.on('ready', () => console.log('module ready'));

console.log(module);
test1();
test2();
