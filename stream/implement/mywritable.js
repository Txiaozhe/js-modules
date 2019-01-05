const {Writable} = require('stream');

const mywritable = new Writable({
  write(chunk, encoding, cb) {
    console.log('output: ', chunk.toString());
    cb();
  }
});

mywritable.write(null);
process.stdin.pipe(mywritable);
