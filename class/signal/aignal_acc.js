setInterval(() => {}, 1000)

console.log(process.pid)
process.on('SIGUSR1', () => {
  console.log('===> ', arguments)
})
