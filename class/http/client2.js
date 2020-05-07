var http = require('http');
var encode = function (username, password) {
    return new Buffer(username + ":" + password).toString('base64');
}
var options = {
    hostname: 'localhost',
    port: 8888,
    path: '/',
    method: 'GET',
    //auth:encode('qinliang',123)
    auth: "qinliang:123"
    //用户名为qinliang,密码为123
};
var req = http.request(options, function (res) {
    //获取到服务器的返回数据
    res.on('data', function (chunk) {
        //这里的chunk是Buffer对象，这一点一定要注意是编码的数据
        console.log(res instanceof http.IncomingMessage);
        //这里打印true
    })
})
req.end();
