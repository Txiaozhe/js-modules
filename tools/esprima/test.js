const esprima = require('esprima');

const program = `
// const answer = 42;
// function fun() {
//   if (answer > 10) {
//     console.log(answer);
//   }
// }

// fun();

// if (answer > 10) {
//   console.log(answer);
// }

for (var i = 0; i < 10000; i++) {
  console.log(i);
}
`;

const ts_res = esprima.tokenize(program);
console.log(JSON.stringify(ts_res));

console.log('\n-----------------------------------------\n');
const p_res = esprima.parse(program);
console.log(JSON.stringify(p_res));
