const moment = require('moment');

const arr = [
    {
        t: '2',
        a: '2018-04-05',
        name: 'ddd'
    },
    {
        t: '3',
        a: '2018-04-05',
        name: 'ddd'
    },
    {
        t: '1',
        a: '2018-04-05',
        name: 'ddd'
    }
]

console.log(arr.sort((a, b) => a.t - b.t));
