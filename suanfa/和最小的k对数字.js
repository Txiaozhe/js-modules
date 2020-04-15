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

const assert = require('assert')
describe('Test', () => {
    it('1', () => {
        assert.deepEqual(kSmallestPairs([1,7,11], [2,4,6], 3), [[1,2], [1,4], [1,6]])
    })
})
