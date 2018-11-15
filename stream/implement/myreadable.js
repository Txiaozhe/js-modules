const {Readable} = require('stream');

const inStream = new Readable({
  read() {

  }
});

inStream.push('aaaaaaaa');
inStream.push('bbbbbbbb');

inStream.push(null);

inStream.pipe(process.stdout);
