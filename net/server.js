const net = require('net');

const server = new net.Server();

server.listen({port: 9000});

server.on('connection', (socket) => {
    console.log('connect');
    for(let i = 1; i < 10; i++) {
        const buf = Buffer.allocUnsafe(28 * i);
        buf.writeInt32LE(30, 0)
        buf.writeInt32LE(25, 4)
        buf.writeInt32LE(30, 8)
        buf.writeInt32LE(25, 12)
        buf.writeInt32LE(30, 16)
        buf.writeInt32LE(25, 20)
        buf.writeInt32LE(25 * i, 24)
        socket.write(buf);
        console.log('send');
    }
});

server.on('error', (err) => {
    console.log(err.toString());
  });
