'use strict'

const count = 1000

console.time('test-by-fs-sync')
for (let i = 0; i < count; i++) {
  const fs = require('fs')
  const path = require('path')
  const vm = require('vm')
  const context = {
    console
  }

  const code = fs.readFileSync(path.join(__dirname, 'script.js'))
  const script = new vm.Script(code)
  vm.createContext(context)
  script.runInContext(context)
}

console.timeEnd('test-by-fs-sync')
