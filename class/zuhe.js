const _ = require('lodash');

const obj = [
    {
        n: 1,
        d: 'a'
    },
    {
        n: 2,
        d: 'a'
    },
    {
        n: 1,
        d: 'b'
    },
    {
        n: 4,
        d: 'b'
    },
    {
        n: 1,
        d: 'c'
    }
]

var newArr = [];
obj.forEach(r => {
    if(typeof(newArr[r.d]) == 'undefined'){
        newArr[r.d] = 0;
    }
    newArr[r.d] += r.n;
});

const arr = [];
for(let d in newArr) {
    arr.push({n: newArr[d], d: d});
}
console.log(arr);

