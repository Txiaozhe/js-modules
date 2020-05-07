const buf1 = Buffer.allocUnsafe(26)
const buf2 = Buffer.allocUnsafe(26).fill('!');

for (let i = 0; i < 26; i++) {
    buf1[i] = i + 97
}

buf1.copy(buf2, 8, 16, 20)

console.log(buf2.toString('ascii', 0, 26))
console.log(buf1.toString('ascii', 0, 26))