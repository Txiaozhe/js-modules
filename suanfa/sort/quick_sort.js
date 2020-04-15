'use strict'

// 快排
function quickSort(arr, i, j) {
    if (i < j) {
        let left = i, right = j, p = arr[left]
        while(i < j) {
            while(arr[j] >= p && i < j) {
                j--
            }
            if (i < j) {
                arr[i++] = arr[j]
            }
            while(arr[i] <= p && i < j) {
                i++
            }
            if (i < j) {
                arr[j--] = arr[i]
            }
        }
        arr[i] = p
        quickSort(arr, left, i - 1)
        quickSort(arr, i + 1, right)
        return arr
    }
}

const assert = require('assert')
describe('Test', () => {
    it('1', () => {
        const arr = [2, 10, 4, 1, 0, 9, 5 ,2];
        assert.deepEqual(quickSort(arr, 0 , arr.length-1), [ 0, 1, 2, 2, 4, 5, 9, 10 ])
    })
})
