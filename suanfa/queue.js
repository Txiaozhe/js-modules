/**
 * Creator: Tang Xiaoji
 * Time: 2018-07-20
 */

'use strict';

const BUFFER_FLUSH_INTERVAL = 10 * 1000;

class Queue {
  constructor(size, onFlush) {
    this.size = size;
    this.onFlush = onFlush;
    this.timer = null;
    this.buffer = [];
  }

  push(...items) {
    if (items && items.length) {
      this.buffer.push(...items);
    }
    clearTimeout(this.timer);
    if (this.buffer.length >= this.size) {
      this.flush();
    } else {
      this.timer = setTimeout(this.push.bind(this), BUFFER_FLUSH_INTERVAL);
    }
  }

  flush(onFlush = this.onFlush) {
    const tmp = this.buffer;
    this.buffer = [];
    onFlush(tmp, () => {
      this.buffer = this.buffer.concat(tmp);
    });
  }
}

module.exports = Queue;

const q = new Queue(2, (data, onError) => {
  console.log(data);
});

for (let i = 0; i < 10; i++) {
  q.push(1);
}
