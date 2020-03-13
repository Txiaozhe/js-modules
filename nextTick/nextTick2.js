var http = require('http');

function compute() {
    console.log('compute...')
    process.nextTick(compute); // nextTick 会把其他io阻断
}

http.createServer(function(req, res) {
     res.writeHead(200, {'Content-Type': 'application/json'});
     res.end('{"say": "Hello World"}');
}).listen(5000, '127.0.0.1');

compute();
