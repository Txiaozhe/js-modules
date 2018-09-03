/**
 * Creator: Tang Xiaoji
 * Time: 2018-07-10
 */

'use strict';

const net = require('net');
const JsonSocket = require('json-socket');
const counter = require('./counter');

const port = 8000;
const host = '127.0.0.1';

const socket = new JsonSocket(new net.Socket());
socket.connect(port, host);

socket.on('connect', () => {
  socket.sendMessage({type: 'call', methods: Object.keys(counter)});
  socket.on('message', message => {
    const {type, method, args} = message;
    switch (type) {
      case 'request': {
        const func = counter[method];
        if(typeof func !== 'function') {
          console.log('没有此方法');
        } else {
          const res = counter[method](...args);
          socket.sendMessage({type: 'response', method, res});
        }
      }
    }
  });
});
