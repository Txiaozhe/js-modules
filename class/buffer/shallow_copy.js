// 浅拷贝

const buf1 = Buffer.allocUnsafe(26)

for (let i = 0; i < 26; i++) {
    buf1[i] = i + 97
}

const buf2 = buf1.slice(0, 3)
console.log(buf2.toString('ascii', 0, buf2.length))

buf1[0] = 33

console.log(buf2.toString('ascii', 0, buf2.length))
