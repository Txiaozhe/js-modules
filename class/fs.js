const fs = require('fs');

fs.watch('./package.json', (event, fn) => {
    console.log(event, fn);
});

fs.watchFile('./package.json', (prev, next) => {
    console.log(prev, next);
});
