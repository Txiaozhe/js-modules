// function test() {
//     const a = Array.prototype.slice.call(arguments);

//     console.log(arguments);
//     console.log(a);
// }

// test('a', 'b');

// const a = [
//     {
//         n: 1
//     },
//     {
//         n: 4
//     },
//     {
//         n: 2
//     },
//     {
//         n: 0
//     },
// ]

// console.log(a.sort((r1, r2) => r1.n - r2.n))

// const arr = [1, 2, 3, 4, 5, 6]
// console.log(arr.includes(+6));


// const arr = [];
// arr[8] = 1;
// arr[1] = 3

// console.log(arr);
// console.log(arr.hasOwnProperty(1));

// 参数传递 or 值传递
// const a = [1, 2, 3];
// const b = [4, 5, 6];

// const c = [].concat(a);
// c.push(7)
// console.log('c: ', c);
// console.log('a: ', a);

// const d = a.slice(2);
// console.log('d: ', d);
// console.log('a: ', a);

// trim test
function trimAreaAndChannel(br, source, other, cb) {
  source.slice(br).forEach(o => {
    other = cb(other, o);
  });

  const res = source.slice(0, br);
  res.push(other);
  return res;
};

const source = [
  {
    "area": "美国",
    "users": 85,
    "valuable_user": 4,
    "trade_volume": 50
  },
  {
    "area": "中国",
    "users": 37,
    "valuable_user": 0,
    "trade_volume": 0
  },
  {
    "area": "日本",
    "users": 28,
    "valuable_user": 1,
    "trade_volume": 57128.840000000084
  },
  {
    "area": "韩国",
    "users": 15,
    "valuable_user": 3,
    "trade_volume": 2
  }
];

const other = {
  "area": "其他",
  "users": 13,
  "valuable_user": 1,
  "trade_volume": 1
};

const r = trimAreaAndChannel(2, source, other, (oth, o) => {
  return {
    "area": "其他",
    "users": oth.users + o.users,
    "valuable_user": oth.valuable_user + o.valuable_user,
    "trade_volume": oth.trade_volume + o.trade_volume
  }
});

console.log(r);
