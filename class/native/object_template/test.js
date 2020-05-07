const tmp = require('./build/Release/template.node');

const t = new tmp.TestClass();
console.log(t.value);

console.log(tmp.array[0].num = tmp.array[0].num + 1);
console.log(tmp.array);

console.log(tmp);
