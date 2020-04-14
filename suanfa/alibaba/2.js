// ## 实现一个 `convert`函数, 接收一个整数 `n`(0<= n <= 10^12)，返回符合下表规则的自定义7进制结果：

// | base10 | 0    | 1    | 2    | 3    | 4    | 5    | 6    |
// | ------ | ---- | ---- | -----| ---- | ---- | ---- | ---- |
// | base7  | f    | c    | e    | 2    | 0    | 1    | 7    |

// 示例:
// - 输入: 7, 结果：cf
// - 输入: 2017 , 结果：17cc


function transfer(num, base = 7, result = []) {
    const s = Math.floor(num / base) // 商
    const y = num % base // 余数
    if (s === 0) {
        y && result.push(y)
        return result.reverse()
    }

    result.push(y)
    return transfer(s, 7, result)
}

function run(num) {
    let result = ''
    const keys = [ 'f', 'c', 'e', '2', '0', '1', '7' ]
    console.log(transfer(num))
    for (const _n of transfer(num)) {
        result += `${keys[_n]}`
    }
    return result
}

const assert = require('assert')
describe('Test', () => {
    it('result for 7 should be: cf', () => {
        assert.equal(run(7), 'cf')
    })

    it('result for 2017 should be: cf', () => {
        assert.equal(run(2017), '17cc')
    })
})
