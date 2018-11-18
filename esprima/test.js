const esprima = require('esprima');

const program = `
const answer = 42;
function fun() {
  console.log(answer)
}

fun();
`;

const ts_res = esprima.tokenize(program);
console.log(JSON.stringify(ts_res));

console.log('\n-----------------------------------------\n');
const p_res = esprima.parse(program);
console.log(JSON.stringify(p_res));
