// function test() {
//     return Array.prototype.slice.call(arguments);
// }

// console.log(test(['a', 'b'], 2, 3, 4));

function test(...args) {
    console.log(args);
    console.log(args.pop());
}

test(1, 2, 3);

function ttt() {
    console.log(arguments);
    console.log(Object.keys(arguments));
    console.log(Object.values(arguments));
}

ttt('a', 'b', 'c');
