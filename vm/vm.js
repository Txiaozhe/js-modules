const vm = require('vm');
const fs = require('fs');
const path = require('path')

const script = new vm.Script(fs.readFileSync(path.join(__dirname, './driver.js')))

let sandbox = {
  say: 'hello world',
  console: {
    log: console.log
  },
  setInterval,
  require,
  process,
  setImmediate,
  Buffer,
  callback: function(c) {
    console.log('-=-=-= ', c)
  }
};

let context = vm.createContext(sandbox);
const res = script.runInContext(context, {
  displayErrors: true
});

console.log(res)
