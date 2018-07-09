// function test(url) {
//     const no = url.match(/(https|http):\/\/www.douyu.com\/(\S*)/);
//     console.log(no);
//     console.log(parseInt(no[2]));
// }

// test('http://www.douyu.com/2051663dwewd');

const reg = new RegExp(/^[A-Z][a-z]{1,}$/);
console.log(reg.test('AdwdSsw'))
