'use strict'

const count = 1000

console.time('test-by-fs-async')

const tasks = []
for (let i = 0; i < count; i++) {
  const fs = require('fs')
  const path = require('path')
  const vm = require('vm')
  const context = {
    console
  }

  tasks.push(new Promise((resolve, reject) => {
    fs.readFile(path.join(__dirname, 'script.js'), (err, code) => {
      const script = new vm.Script(code)
      vm.createContext(context)
      script.runInContext(context)
      resolve()
    })
  }))
}

Promise.all(tasks).then(() => {
  console.timeEnd('test-by-fs-async')
})
