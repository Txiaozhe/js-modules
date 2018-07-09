const { URL } = require('url');

const url = 'http://api.baidu.com:8080/api/v1/wechat/loginpage?url=center'
const myURL = new URL(url);
console.log(myURL.searchParams.get('url'));
console.log(myURL.pathname.match(/v1\/(\S*)\/loginpage/)[1]);