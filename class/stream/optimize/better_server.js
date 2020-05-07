const fs = require('fs');
const http = require('http');

const server = http.createServer();

server.on('request', (req, res) => {
  const src = fs.createReadStream('/Users/jimtang/GitHub/js-modules/stream/optimize/big.file');
  src.pipe(res);
});

server.listen(8080);
