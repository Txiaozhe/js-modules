// 给定一组词组输入 words ，求解共有多少个不同的词，并且每个词的出现次数 ，要求使用ES2015的新特性
// words 输入：
// ```
// [
//  'aa', 'bb', 'cc', 'dd', 'aa', 'bc', 'cc', 'dd', 'ef', 'fd', 'bb', 'ac', 'ac', 'bf', 'dd', 'cdf', 'agh', 'sfg', 'sfg', 'er', 'erb', 'abcd', 'efds',
// ]
// ```

const words = [
  'aa', 'bb', 'cc', 'dd', 'aa', 'bc', 'cc', 'dd', 'ef', 'fd', 'bb', 'ac', 'ac', 'bf', 'dd', 'cdf', 'agh', 'sfg', 'sfg', 'er', 'erb', 'abcd', 'efds',
]

function run(w) {
    const result = {}
    for (let _w of w) {
        result[_w] = _w
    }

    console.log('length of words: ', words.length)
    console.log('length of diff words: ',Object.keys(result).length)
}


run(words)
