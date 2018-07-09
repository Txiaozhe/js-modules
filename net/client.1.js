const net = require('net');
const msgPack = require('msgpack-lite');
const client = net.createConnection({ port: 443, host: 'https://sc-live.kascend.com' }, () => {
    
  });

  client.on('data', (buf) => {
    console.log(buf);
  });

  client.on('end', () => {
    console.log('disconnected from server');
  });

  client.on('error', (err) => {
    console.log(err.toString());
  });
