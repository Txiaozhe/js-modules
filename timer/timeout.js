
const fs = require('fs');
console.time('out');

setTimeout(() => {
    someAsyncTask(() => {
        console.timeEnd('out');
    });
}, 500)

function someAsyncTask(cb) {
    setTimeout(cb || (() => {}), 1000);
}
