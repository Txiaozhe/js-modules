// const Class = require('./Class');

// const c1 = new Class('hello');

// c1.print();

// const c2 = new Class('hello1');

// c2.print();

// function retriZhanqiUri(uri) {
//     const u = uri.replace(/('img2')/, 'img3');

//     const index_ = uri.indexOf('_');
//     const index_dot = uri.indexOf('.jpg');

//     const s = uri.slice(index_ + 1, index_dot);

//     return `${u.slice(0, index_)}.jpg?${s}`;
//   }

// const url = 'https://img2.zhanqi.tv/avatar/238/903/111485269_1514878403.jpg'

// console.log(url);
// console.log(retriZhanqiUri(url));

function retriZhanqiUri(uri) {
  const u = uri.replace(/img2/, 'img3');

  const index_ = uri.indexOf('_');
  const index_dot = uri.indexOf('.jpg');

  const s = uri.slice(index_ + 1, index_dot);
  return `${u.slice(0, index_)}.jpg?${s}`;
}

const u = 'https://img2.zhanqi.tv/avatar/7f/746/108905841_1452432010.jpg';
console.log(u);
const r = retriZhanqiUri(u);
console.log(r);