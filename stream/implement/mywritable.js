const {Writable} = require('stream');

const mywritable = new Writable({
  write(chunk, encoding, cb) {
    console.log('output: ', chunk.toString());
    cb();
  }
});

process.stdin.pipe(mywritable);
