'use strict'

function solved1(arr) {
    let max = 0
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            const x = j - i
            const y = arr[i] < arr[j] ? arr[i] : arr[j]
            max = x * y > max ? x * y : max 
        }
    }

    return max
}

function solved2(height) {
    let maxarea = 0, l = 0, r = height.length - 1;
    while (l < r) {
        maxarea = Math.max(maxarea, Math.min(height[l], height[r]) * (r - l))
        if (height[l] < height[r])
            l++
        else
            r--
    }
    return maxarea
}

const assert = require('assert')
describe('Test', () => {
    it('1', () => {
        assert.equal(solved1([1, 8, 6, 2, 5, 4, 8, 3, 7]), 49)
    })

    it('2', () => {
        assert.equal(solved2([1, 8, 6, 2, 5, 4, 8, 3, 7]), 49)
    })
})
