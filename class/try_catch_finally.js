'use strict';

function ttt() {
  let a = 2;
  try {
    return a;
  } catch(e) {
    a = a + 1;
  } finally {
    a = a + 1;
    console.log('after finally: ', a);
  }
}

console.log('after ttt: ', ttt());
