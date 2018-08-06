// const promise = Promise.resolve()
//   .then(() => {
//     return promise
//   })
// promise.catch(console.error)
// 会导致死循环

setTimeout(() => {
    console.log(1)
  }, 0)
  new Promise((resolve, reject) => {
    console.log(2)
    for (let i = 0; i < 10000; i++) {
      i === 9999 && resolve()
    }
    console.log(3)
  }).then(() => {
    console.log(4)
  })
  console.log(5)

  // Promise 构造函数是同步执行的，所以先打印 2、3，然后打印 5，接下来 event loop 进入执行 microtask 阶段，执行 promise.then 的回调函数打印出 4，然后执行下一个 macrotask，恰好是 timer 阶段的 setTimeout 的回调函数，打印出 1