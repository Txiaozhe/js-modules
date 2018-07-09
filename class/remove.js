const _ = require('lodash');
const arr = [[1, 2, 3, 4], [1, 2], [], []];
// console.log(_.remove(arr, (ele) => {
//   return ele.length;
// }));

// const arr2 = [1, 2, 3, 4, 5, 6, 7];

// console.log(_.flatten(arr2));

// let a = {};
// a['hhhh'] = 'dd';
// console.log(a);

const a = new Array(2);
a[0] = [1, 2];
a[1] = [1, 2, 3];

const ar = _.remove(a, (ele) => {
  return ele;
});

console.log(ar, ar.length, a.length);

