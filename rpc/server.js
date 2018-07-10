/**
 * Creator: Tang Xiaoji
 * Time: 2018-07-10
 */

'use strict';

const net = require('net');
const JsonSocket = require('json-socket');
const bluebird = require('bluebird');

const port = 8000;
const server = net.createServer();
server.listen(port);

const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('remote', async remote => {
  await remote.plus(3);
  const c = await remote.counter();
  console.log('result ---> ', c);
});

let remote = {};
let callback = null;
server.on('connection', client => {
  client = new JsonSocket(client);
  client.on('message', message => {
    switch (message.type) {
      case 'call': {
        message.methods.forEach(method => {
          Object.defineProperty(remote, method, {
            enumerable: true,
            value: bluebird.promisify((...args) => {
              console.log('request...', method);
              const cb = args.pop();
              callback = cb;
              client.sendMessage({
                type: 'request',
                method,
                args
              });
            })
          });
        });
        emitter.emit('remote', remote);
        break;
      }
      case 'response': {
        callback && callback(null, message);
        break;
      }
    }
  });
});
