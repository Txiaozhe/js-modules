'use strict';

var stream = require('stream');
// var assert = require('assert');

var readable = new stream.Readable({
  read: () => {},
  encoding: 'utf16le',
  objectMode: true
});

readable.push(Buffer.from('abc', 'utf16le'));
console.log(readable._readableState.buffer.head);
readable.push(Buffer.from('def', 'utf16le'));
console.log(readable._readableState.buffer.head);
readable.push(Buffer.from('ghi', 'utf16le'));
console.log(readable._readableState.buffer.head);

console.log('read>>>>>>>>');
readable.read(3);
console.log(readable._readableState.buffer.head);
