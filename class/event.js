// const EventEmitter = require('events');

// class MyEmitter extends EventEmitter {}

// const myEmitter = new MyEmitter();
// myEmitter.on('event', () => {
//   console.log('触发了一个事件！');
// });

// setTimeout(() => {
//     myEmitter.emit('event');
// }, 2000);

function longestSeqContainedIn(a, b) {
  for (var len = a.length; len >= 3; --len) {
    for (var i = 0; i < a.length - len; ++i) {
      // Attempt to find a[i:i+len] in b
      for (var j = 0; j < b.length - len; ++j) {
        let matches = true;
        for (var k = 0; k < len; ++k) {
          if (a[i + k] !== b[j + k]) {
            matches = false;
            break;
          }
        }
        if (matches)
          return [ len, i, j ];
      }
    }
  }

  return [ 0, 0, 0 ];
}

const contained = longestSeqContainedIn([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6, 7]);
console.log(contained);