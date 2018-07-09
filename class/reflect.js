function test(...args) {
    console.log('kkk', args);
}

Reflect.apply(test, this, [1, 2], 1);
