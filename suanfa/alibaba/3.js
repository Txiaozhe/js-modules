// ## 写一个difference 方法，用于比较两个数组，返回两数组中不同的部分。
// ```bash
// difference([1, 2, 3, 4, 5], [2, 5, 7]);
// => [1, 3, 4, 7]
// ```

function difference(arr1, arr2) {
    function equal() {
        const res = {}
        for(let a of arr1) {
            res[a] = a
        }

        for(let a of arr2) {
            res[a] = a
        }

        return Object.values(res)
    }

    const result = []
    const equaled = equal(arr1, arr2)
    for (let _equaled of equaled) {
        if ((!arr1.includes(_equaled) || !arr2.includes(_equaled))) {
            result.push(_equaled)
        }
    }

    return result
}

const assert = require('assert')
const { equal } = require('assert')
describe('Test', () => {
    it('1', () => {
        assert.deepEqual(difference([1, 2, 3, 4, 5], [2, 5, 7]), [1, 3, 4, 7])
    })
})
