const mw = [
    (ctx, next) => {
        console.log('fn1 ==> 1');
        next();
        console.log('fn1 ==> 2');
    },
    (ctx, next) => {
        console.log('fn2 ==> 1');
        next();
        return;
        console.log('fn2 ==> 2');
    },
    (ctx, next) => {
        console.log('fn3 ==> 1');
        next();
        console.log('fn3 ==> 2');
    }
];

let index = 0;
function compose(m) {
    m[index]();
    index++;
    if (index < m.length) {
        compose(m);
    }
}

compose(mw);
