'use strict';

const { Stream, Writable } = require('stream');

const mywritable = new Writable({
  write(chunk, encoding, cb) {
    console.log('output: ', chunk.toString());
    cb();
  },
  objectMode: true
});

const uint8arr = new Uint8Array();

console.log(uint8arr, uint8arr.toString());
console.log(Stream._isUint8Array(uint8arr));

mywritable.write({a: 1});

console.log(mywritable);
process.stdin.pipe(mywritable);
