const state = {
  PENDDING: 'PENDDING',
  FULFILLED: 'FULFILLED',
  REJECTED: 'REJECTED'
};

class MyPromise {
  constructor(executor) {
    this.state = state.PENDDING;
    this.value = undefined;
    this.reason = undefined;
    this.onResolvedCallbacks = [];
    this.onRejectedCallbacks = [];
    console.log('new')
    try {
      console.log('exec1')
      executor(this.resolve.bind(this), this.reject.bind(this));
      console.log('exec2')
    } catch (e) {
      console.log('catch')
      this.reject(e);
    }
  }

  resolve(value) {
    if (this.state === state.PENDDING) {
      this.state = state.FULFILLED;
      this.value = value;
      this.onResolvedCallbacks.forEach(cb => cb());
    }
  };

  reject(reason) {
    if (this.state === state.PENDDING) {
      this.state = state.REJECTED;
      this.value = reason;
      this.onRejectedCallbacks.forEach(cb => {
        console.log(cb);
        cb()
      });
    }
  }

  then(onFulfilled, onRejected) {
    console.log('push');
    this.onResolvedCallbacks.push(() => onFulfilled(this.value));
    this.onRejectedCallbacks.push(() => onRejected(this.reason));
    return this;
  }
}

// test
const mp = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    const n = Math.random();
    if (n > 0.5) {
      resolve(n);
    } else {
      reject(n);
    }
  }, 3000);
  // throw new Error('error')
});

mp.then((v) => {
  console.log('value: ', v, ', state: ', mp.state);
}, (r) => {
  console.log('reason: ', r, ', state: ', mp.state);
});
