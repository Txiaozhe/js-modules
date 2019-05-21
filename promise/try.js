'use strict';

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('llll');
  }, 2000)
})

async function test() {
  let err = '';
  await promise.catch(e => {
    err = e;
  })

  console.log('llllll+++> ', err)
}

test().then()
