'use strict'

function solved(nums1, nums2) {
    const len = nums1.length + nums2.length
    let i = 0, j = 0
    if (len % 2 === 0) {
        let t1 = len / 2 - 1
        for (let k = 0; k < len - 1; k++) {
            if (nums1[k] < nums2[k]) {
                i++
                if (nums1[i] === undefined) {
                    j++
                    if (j === t1) {
                        return (nums2[j] + nums2[j - 1]) / 2
                    }
                } else {
                    if (i === t1) {
                        return (nums1[i] + nums2[j]) / 2
                    }
                }
            } else {
                j++
                if (nums2[j] === undefined) {
                    i++
                    if (i === t1) {
                        return (nums1[i] + nums1[i - 1]) / 2
                    }
                } else {
                    if (j === t1) {
                        return (nums1[i] + nums2[j]) / 2
                    }
                }
            }
        }
    } else {
        let t1 = Math.floor(len / 2)
        for (let k = 0; k < len - 1; k++) {
            if (nums1[k] < nums2[k]) {
                i++
                if (nums1[i] === undefined) {
                    if (i === t1) {
                        return nums2[j]
                    } else {
                        j++
                        if (j === t1) {
                            return nums2[j]
                        }
                    }
                } else {
                    if (i === t1) {
                        return nums1[i]
                    }
                }
            } else {
                j++
                if (nums2[j] === undefined) {
                    if (j === t1) {
                        return nums1[i]
                    } else {
                        i++
                        if (i === t1) {
                            return nums1[i]
                        }
                    }
                } else {
                    if (j === t1) {
                        return nums2[j]
                    }
                }
            }
        }
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
