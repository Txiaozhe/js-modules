function test(cb) {
    const a = 1;
    const b = 2;
    cb(a, b);
}

function aa() {
    test((a, b) => {
        console.log(a + b);
    });
    console.log('ss');
}

aa()
