// function test() {
//     const a = Array.prototype.slice.call(arguments);

//     console.log(arguments);
//     console.log(a);
// }

// test('a', 'b');

// const a = [
//     {
//         n: 1
//     },
//     {
//         n: 4
//     },
//     {
//         n: 2
//     },
//     {
//         n: 0
//     },
// ]

// console.log(a.sort((r1, r2) => r1.n - r2.n))

// const arr = [1, 2, 3, 4, 5, 6]
// console.log(arr.includes(+6));


// const arr = [];
// arr[8] = 1;
// arr[1] = 3

// console.log(arr);
// console.log(arr.hasOwnProperty(1));

const a = [1, 2, 3];
const b = [4, 5, 6];

const c = [].concat(a);
c.push(7)
console.log('c: ', c);
console.log('a: ', a);

const d = a.slice(2);
console.log('d: ', d);
console.log('a: ', a);
