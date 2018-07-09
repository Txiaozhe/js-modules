const WebSocket = require('ws');

const ws = new WebSocket('ws://sc-live.kascend.com:443', {
  perMessageDeflate: false
});

ws.on('open', function open() {
    ws.send('something');
  });
  
  ws.on('message', function incoming(data) {
    console.log(data);
  });
