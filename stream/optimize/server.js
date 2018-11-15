const fs = require('fs');
const http = require('http');

const server = http.createServer();

server.on('request', (req, res) => {
  fs.readFile('/Users/jimtang/GitHub/js-modules/stream/optimize/big.file', (err, data) => {
    if (err) throw err;
    res.end(data);
  });
});

server.listen(8080);
