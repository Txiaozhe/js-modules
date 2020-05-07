const {Readable} = require('stream');

const inStream = new Readable({
  objectMode: true
});

inStream.push('aaaaaaaa\n');
inStream.push('bbbbbbbb\n');

inStream.push(null);

console.log(inStream.read());

inStream.pipe(process.stdout);
