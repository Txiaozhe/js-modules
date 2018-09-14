// 查找最长重复序列
// from node events
function longestSeqContainedIn(a, b) {
    for (var len = a.length; len >= 3; --len) {
        for (var i = 0; i < a.length - len; ++i) {
            // Attempt to find a[i:i+len] in b
            for (var j = 0; j < b.length - len; ++j) {
                let matches = true;
                for (var k = 0; k < len; ++k) {
                    if (a[i + k] !== b[j + k]) {
                        matches = false;
                        break;
                    }
                }
                if (matches)
                    return [len, i, j];
            }
        }
    }

    return [0, 0, 0];
}

const arr = longestSeqContainedIn([1, 0, 1, 2, 3, 4, 5, 6, 8, 9, 99], [9, 1, 2, 3, 4, 5, 6, 8, 7]);
console.log(arr)

// return [b序列中出现重复的终点, a序列中开始重复的起点, b序列中开始出现重复的起点]
