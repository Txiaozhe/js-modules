function ws(m, n) {
  var c = 1
  for (var i = 0; i < n; i++) {
    c = c * m
  }

  return c
}

function tran(str) {
  var xh = 0
  var bm = 0
  var qz = 0
  for(var i = 1; i <= str.length; i++) {
    var s = str[i - 1]
    xh = s.charCodeAt() - 'a'.charCodeAt() + 1
    qz = ws(26, str.length - i)
    bm = bm + xh * qz
  }

  return bm
}

var result = tran('by')
console.log(result)

2 * 26 ^ 1 + 25 * 26 ^ 0 = 77

1080 * 1000  * 8 
