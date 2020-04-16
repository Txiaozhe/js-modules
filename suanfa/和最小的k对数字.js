var kSmallestPairs = function(nums1, nums2, k) {
    const res = []
    for (const n1 of nums1) {
        for (const n2 of nums2) {
            res.push({
                sum: n1 + n2,
                ele: [ n1, n2 ]
            })
        }
    }

    return res.sort((_r1, _r2) => _r1.sum - _r2.sum).map(r => r.ele).slice(0, k)
};

// 双指针法
var kSmallestPairs2 = function(nums1, nums2, k) {
    let i1 = 0, i2 = 0, result = [ [nums1[i1], nums2[i2]] ]
    for (let i = 0; i < Math.max(nums1.length, nums2.length); i++) {
        i1++
        i2++
        if (!nums1[i1] || nums1[i1] > nums2[i2]) {
            i1--
        } else if (!nums1[i2] || nums1[i1] > nums2[i2]) {
            i2--
        }
        result.push([nums1[i1], nums2[i2]])
        if (result.length === k) {
            return result
        }
    }
}

const assert = require('assert')
describe('Test', () => {
    it('1', () => {
        assert.deepEqual(kSmallestPairs([1, 7, 11], [2, 4, 6], 3), [[1, 2], [1, 4], [1, 6]])
    })

    it('2', () => {
        assert.deepEqual(kSmallestPairs2([1, 7, 11], [2, 4, 6], 3), [[1, 2], [1, 4], [1, 6]])
    })

    it('3', () => {
        assert.deepEqual(kSmallestPairs2([1, 7, 11], [2, 4], 2), [[1, 2], [1, 4]])
    })
})
