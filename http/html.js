const http = require('http');
const fs = require('fs');

const server = http.createServer(function (req, res) {
    console.log(req.url)
    if (req.url == '/test1') {
        fs.readFile('./http/test1.html', function (err, data) {
            res.writeHead(200, { 'Content-type': 'text/html;charset=UTF-8' });
            res.end(data);
        })
    } else if (req.url == '/test2') {
        fs.readFile('./http/test2.html', function (err, data) {
            res.writeHead(200, { 'Content-type': 'text/html;charset=UTF-8' });
            res.end(data);
        })
    } else {
        res.writeHead(200, { "Content-type": "text/html;charset=UTF-8" });
        res.end("Hello World!");
    }
});

server.listen(4000, "127.0.0.1");
