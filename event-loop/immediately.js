setTimeout(() => {
    console.log('a');
    setTimeout(() => {
        console.log('c');
    }, 0);
}, 1000);

setTimeout(() => {
    console.log('b');
}, 0);
