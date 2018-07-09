// function test() {
//     return Array.prototype.slice.call(arguments);
// }

// console.log(test(['a', 'b'], 2, 3, 4));

function test(...args) {
    console.log(args);
    console.log(args.pop());
}

test(1, 2, 3);
