var http = require('http');
http.createServer(function (req, res) {
    var auth = req.headers['authorization'] || '';
    //这里获取到的是一个数组Basic cWlubGlhbmc6MTIz，其中第一个部分是一定的，第二部分为new Buffer("qinliang:123").toString('base64')
    var parts = auth.split(' ');
    var method = parts[0];//Basic
    var encoded = parts[1];//秘钥
    var decoder = new Buffer(encoded, 'base64').toString('utf-8').split(":");
    //解密后获取原始值
    var user = decoder[0];
    //用户名
    var pass = decoder[1];
    //密码，到了这一步就获取到了客户端的用户名和密码了
    if (!user == 'qinliang' && !pass == '123') {
        res.setHeader('WWW-Authenticate', 'Basic realm="Secure Area"');
        res.writeHead(401);
        //未授权
        res.end();
    } else {
        res.end('You are forbidden to enter!');
    }

}).listen(8888, 'localhost');