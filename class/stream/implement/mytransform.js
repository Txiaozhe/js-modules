const {Transform} = require('stream');

const my_transform = new Transform({
  transform(chunk, encoding, cb) {
    this.push(chunk.toString().toUpperCase());
    cb();
  }
});

process.stdin.pipe(my_transform).pipe(process.stdout);
