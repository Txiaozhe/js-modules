setTimeout(() => {
    console.log('a');
    setTimeout(() => {
        console.log('c');
    }, 0);
}, 1000);

setTimeout(() => {
    console.log('b');
}, 0);

setImmediate(() => {
    console.log('setImmediate1')
    setImmediate(() => {
        console.log('setImmediate2')
    })
    process.nextTick(() => {
        console.log('nextTick')
    })
})

setImmediate(() => {
    console.log('setImmediate3')
})
