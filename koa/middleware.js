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
    let _fn = mw[index];
    return async function _run(context) {
        return await _fn(context, () => { // next
            if (++index < mw.length) {
                _fn = mw[index];
                _run(context);
            }
        });
    }
}

function compose2(mws) {
    let index = 0,
    mw = mws[index];

    return async function _run(ctx) {
        return await mw(ctx, function() {
            if (mws[++index]) {
                mw = mws[index];
                _run(ctx);
            }
        });
    }
}

const run = compose2(mw);
run('ee');
