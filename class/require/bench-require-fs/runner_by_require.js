'use strict'

const count = 1000

console.time('test-by-require')
for (let i = 0; i < count; i++) {
  require('./script.js')
  delete require.cache
}

console.timeEnd('test-by-require')
