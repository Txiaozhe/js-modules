/**
 * 
 */

const isFunction = handle => typeof handle === 'function';

const state = {
    Pending: 'Pending',
    Fulfilled: 'Fulfilled',
    Rejected: 'Rejected'
}

class MyPromise {
    constructor(handler) {
        if (!isFunction) {
            throw 'handler must be a function'
        }

        this._state = state.Pending;

        this.resolved_val = null;
        this.rejected_val = null;

        this.resolve_handle = null;
        this.reject_handle = null;

        handler((args) => {
            this.resolved_val = args;
            this._state = state.Fulfilled;

            isFunction(this.resolve_handle) && this.resolve_handle(this.resolved_val);
        }, (args) => {
            this.rejected_val = args;
            this._state = state.Rejected;

            isFunction(this.reject_handle) && this.reject_handle(this.rejected_val);
        });
    }

    then(cb) {
        this.resolve_handle = cb;
        return this;
    }

    catch(cb) {
        this.reject_handle = cb;
        return this;
    }
}

function test() {
    return new MyPromise((resolve, reject) => {
        setTimeout(() => {
            const rad = Math.random()
            if (rad > 0.5) {
                resolve(rad);
            } else {
                reject(rad);
            }
        }, 3000)
    })
}

test().then(r => console.log(r)).catch(e => console.error(e))
