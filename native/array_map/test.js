const map = require('./build/Release/map.node');

map([1, 2, 3, 4], (ele, i, arr) => {
    console.log(ele, i, arr);
});
