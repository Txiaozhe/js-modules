const net = require('net');
const msgPack = require('msgpack-lite');
const client = net.createConnection({ port: 9000, host: '127.0.0.1' }, () => {
    
  });

  client.on('data', (buf) => {
      let msg = {};
    let buffer = Buffer.from(buf);
    if (buffer.length < 24) {
        return;
      }
      let offset = 0;
      msg.length = buffer.readInt32LE(offset);
      offset += 4;
      msg.sequence = buffer.readInt32LE(offset);
      offset += 4;
      msg.type = buffer.readInt32LE(offset);
      offset += 4;
      msg.ver = buffer.readInt32LE(offset);
      offset += 4;
      msg.crc = buffer.readInt32LE(offset);
      offset += 4;
      msg.reserve = buffer.readInt32LE(offset);
      offset += 4;
      if (buffer.length > 24) {
        msg.body = msgPack.decode(buffer.slice(offset, buffer.length));
      }

      console.log(msg);
  });

  client.on('end', () => {
    console.log('disconnected from server');
  });

  client.on('error', (err) => {
    console.log(err.toString());
  });
