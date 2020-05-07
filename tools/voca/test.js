var v = require('voca');
console.log(v.trim(' Hello World! ')); // Hello World!
console.log(v.sprintf('%d red %s', 3, 'apples')); // 3 red apples

var words = require('voca/words');
var slugify = require('voca/slugify');
console.log(words('welcome to Earth')); // [ 'welcome', 'to', 'Earth' ]s
console.log(slugify('caffé latté')); // caffe-latte

const v1 = v
 .chain('Back to School')
 .lowerCase()
 .words()
 .value()

 console.log(v1); // [ 'back', 'to', 'school' ]

 const v2 = v(" Back to School ")
 .chain()
 .trim()
 .truncate(7)
 .value()
console.log(v2); // Back...
