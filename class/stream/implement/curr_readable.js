const {Readable} = require('stream');

// 按需读写
const curr_readable = new Readable({
  read(size) {
    setTimeout(() => {
      if (this.currentCharCode > 122) {
        this.push(null);
      } else {
        this.push(String.fromCharCode(this.currentCharCode++) + '\n');
      }
    }, 100);
  }
});

curr_readable.currentCharCode = 65;
curr_readable.pipe(process.stdout);
