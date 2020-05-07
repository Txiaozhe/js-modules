console.time('A')
setTimeout(function () {
    console.timeEnd('A');
}, 100);
var i = 0;
for (; i < 100000; i++) { }
