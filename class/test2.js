// const a = [1, 2];
// let b = a;

// console.log(a, b);
// b.push(3);
// console.log(a, b);

// let m = 1;
// let n = m;
// console.log(m, n);
// m = 2;
// console.log(m, n);

// let obj1 = {a: 1};
// let obj2 = obj1;

// console.log(obj1, obj2);
// obj2.b = 2;
// console.log(obj1, obj2);

// const _ = require('lodash');

// const a = ['q', '2', '3'];
// const c = a;
// console.log(_.pull(c, 'q'));
// console.log(a);

// const s = 'name-sss';

// console.log(s.split('-'));

// const a = {
//     num: 0,
//     valueOf: function() {
//       return this.num += 1
//     }
// }

// const equality = (a == 1 && a == 2 && a == 3);
// console.log(equality);


// function addSlashes(str) {
//   return str.replace(/"/g, '\\"').replace(/'/g, "'").replace(/\\/g, '\\\\');
// }

// const s = addSlashes('\\');
// console.log(s);

const PATTERN = {
  Douyu: /www\.douyu\.com\/\w+(?=\?|$)/i,
  Panda: /www\.panda\.tv\/\w+(?=\?|$)/i,
  XYPanda: /xingyan\.panda\.tv\/\w+(?=\?|$)/i,
  Zhanqi: /www\.zhanqi\.tv\/\w+[\w\/]+(?=\?|$)/i,
  Longzhu: /(star|y)\.longzhu\.com\/\w+(?=\?|$)/,
  Chushou: /chushou\.tv\/room\/\w+\.htm(?=\?|$)/,
  Huya: /www\.huya\.com\/\w+(?=\?|$)/,
  Quanmin: /www\.quanmin\.tv\/(\d+|(v|star)\/\w+)(?=\?|$)/,
};


const Danmu = {
  Douyu: '',
  Panda: '',
  XYPanda: '',
  Zhanqi: '',
  Longzhu: '',
  Chushou: '',
  Huya: '',
  Quanmin: ''
};

let TYPE = {};

for (let key of Object.keys(Danmu)) {
  TYPE[key] = key;
}
const getType = url => {
  for (var type in PATTERN) {
    const fn = PATTERN[type];
    if (fn instanceof RegExp && fn.test(url)) {
      return type;
    } else if (typeof fn === 'function' && fn(url)) {
      return type;
    }
  }
};

const valid = (plat, url) => {
  const type = getType(url);
  return type && TYPE.hasOwnProperty(type) && plat === type.toLowerCase();
};

console.log(valid('xypanda', 'https://xingyan.panda.tv/66210'))
