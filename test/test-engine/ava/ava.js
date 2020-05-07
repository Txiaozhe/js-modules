const test = require('ava');

test.beforeEach(t => {
    console.log('run===>')
    t.context = 2;
})

test(t => {
    console.log('1: ', t.context)
    t.deepEqual(t.context + 1, 3);
    console.log('2: ', t.context)
    t.deepEqual(t.context + 1, 3);
    console.log('3: ', t.context)
    t.deepEqual(t.context + 1, 3);
});

test(t => {
    console.log('1: ', t.context)
    t.deepEqual(t.context + 1, 3);
    console.log('2: ', t.context)
    t.deepEqual(t.context + 1, 3);
    console.log('3: ', t.context)
    t.deepEqual(t.context + 1, 3);
});
