const _ = require('lodash');
const arr = [
    {
        a: 1,
        b: 2
    },
    {
        a: 0,
        b: 2
    },
    {
        a: 1,
        b: 2
    },
    {
        a: 3,
        b: 2
    }
];
const s = arr.map(a => {
    if (a.a > 0) {
        return a
    }
});

console.log(_.remove(s, (n) => {
    return n;
}));
