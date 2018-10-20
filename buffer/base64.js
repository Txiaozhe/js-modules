'use strict';

// base64
const base64_buf = Buffer.from('abcd123');
console.log(base64_buf);

console.log(base64_buf.toString('base64'));

// ascii
const ascii_buf = Buffer.from('abcd123就');
console.log(ascii_buf);

console.log(ascii_buf.toString('ascii'));

// binary
const bin_buf = Buffer.from('5');
console.log(bin_buf.toString(2));
