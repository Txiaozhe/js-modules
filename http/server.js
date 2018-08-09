var http = require('http');
http.createServer(function (req, res) {
    res.end("IncomingMessage=" + (req instanceof http.IncomingMessage));
}).listen(1337);