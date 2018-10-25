'use strict';

const mw = [
    async (ctx, next) => {
        console.log('fn1 ==> 1', ctx);
        await next();
        console.log('fn1 ==> 2', ctx);
    },
    async (ctx, next) => {
        console.log('fn2 ==> 1', ctx);
        await next();
        console.log('fn2 ==> 2', ctx);
    },
    async (ctx, next) => {
        console.log('fn3 ==> 1', ctx);
        await next();
        console.log('fn3 ==> 2', ctx);
    }
];

function compose(mw) {
    let index = 0;
    let fn = mw[index];
    return function run(context) {
        return Promise.resolve(fn(context, () => { // next
            if (++index < mw.length) {
                fn = mw[index];
                run(context);
            }
        }));
    }
}

const run = compose(mw);
run('ee');
