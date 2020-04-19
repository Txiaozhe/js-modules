'use strict'

function solved(nums1, nums2) {
    const len = nums1.length + nums2.length
    if (len % 2 === 0) {
        const target = len / 2 - 1
        
    } else {
        const target = Math.floor(len / 2)
    }
}

const assert = require('assert')
describe('Test', () => {
    it('2', () => {
        assert.equal(solved([1, 2], [3, 4]), 2.5)
    })

    it('3', () => {
        assert.equal(solved([1, 3, 4], [2]), 2.5)
    })

    it('4', () => {
        assert.equal(solved([2, 3, 4], [1]), 2.5)
    })

    it('5', () => {
        assert.equal(solved([1], [2, 3, 4]), 2.5)
    })
})

describe('Test2', () => {
    it('1', () => {
        assert.equal(solved([1, 2], [3]), 2)
    })

    it('2', () => {
        assert.equal(solved([1], [2, 3]), 2)
    })

    it('3', () => {
        assert.equal(solved([1, 3], [2]), 2)
    })
})
