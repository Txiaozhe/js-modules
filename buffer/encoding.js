const buf1 = Buffer.alloc(10, 'abg', 'hex')

console.log('hex: ', buf1)

const buf2 = Buffer.alloc(10, 'abg', 'ascii')

console.log('ascii: ', buf2, buf2.toString())

const buf3 = Buffer.alloc(10, 'abg', 'base64')

console.log('base64: ', buf3)

const buf4 = Buffer.alloc(10, 'abg')

console.log('defalut: ', buf4)
