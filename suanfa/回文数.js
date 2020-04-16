function solved(x) {
    if (x < 0) {
        return false
    }

    x = `${x}`
    let i = 0, len = x.length, j = len - 1
    while(len > 1 && i <= Math.floor(len / 2)) {
        if (x[i] === x[j]) {
            i++
            j--
        } else {
            return false
        }
    }

    return true
}

const assert = require('assert')
describe('Test', () => {
    it('1', () => {
        assert.equal(solved(12321), true)
    })

    it('2', () => {
        assert.equal(solved(1221), true)
    })

    it('3', () => {
        assert.equal(solved(1232), false)
    })

    it('4', () => {
        assert.equal(solved(121), true)
    })

    it('5', () => {
        assert.equal(solved(-121), false)
    })

    it('6', () => {
        assert.equal(solved(1210), false)
    })

    it('7', () => {
        assert.equal(solved(0), true)
    })
})
