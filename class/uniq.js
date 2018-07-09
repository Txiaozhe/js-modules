const _ = require('lodash');

const arr = [
    {
        p: {
            name: 'hello'
        }
    },
    {
        p: {
            name: 'hello'
        }
    },
    {
        p: {
            name: 'me'
        }
    }
]

const ua = _.uniqBy(arr, 'p.name');
console.log(ua);
