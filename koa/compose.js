function compose(middleware) {
    if (!Array.isArray(middleware)) throw new TypeError('Middleware stack must be an array!')
    for (const fn of middleware) {
        if (typeof fn !== 'function') throw new TypeError('Middleware must be composed of functions!')
    }

    return function (context, next) {
        let index = -1
        return function dispatch(i) {
            console.log(1, index, i);
            if (i <= index) return Promise.reject(new Error('next() called multiple times'))
            index = i
            console.log(2, index, i);
            let fn = middleware[i]
            if (i === middleware.length) fn = next
            if (!fn) return Promise.resolve()
            try {
                return Promise.resolve(fn(context, function next() {
                    return dispatch(i + 1)
                }))
            } catch (err) {
                return Promise.reject(err)
            }
        }(0)
    }
}

const fns = [
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
]
const res = compose(fns);
console.log(res())
