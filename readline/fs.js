const fs = require('fs')
const readline = require('readline')
const path = require('path')

const rl = readline.createInterface({
  input: fs.createReadStream(path.join(__dirname, './file.txt'))
})

rl.on('line', line => {
  console.log('>>> ', line)
})

rl.on('close', () => {
  console.log('close>>>')
})

rl.on('end', () => {
  console.log('end>>>')
})
