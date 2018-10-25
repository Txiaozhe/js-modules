const mw = [
    (ctx, next) => {
        console.log('fn1 ==> 1');
        next();
        console.log('fn1 ==> 2');
    },
    (ctx, next) => {
        console.log('fn2 ==> 1');
        next();
        console.log('fn2 ==> 2');
    },
    (ctx, next) => {
        console.log('fn3 ==> 1');
        next();
        console.log('fn3 ==> 2');
    }
];

function compose(mw) {
    let index = 0;
    let fn;
    return function run(context) {
        fn = mw[index];
        return Promise.resolve(fn(context, function next() {
            if (++index < mw.length) {
                fn = mw[index];
                run();
            }
        }));
    }
}

const res = compose(mw);
res()
