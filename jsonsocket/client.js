const net = require('net'),
    JsonSocket = require('json-socket');

const port = 9838; //The same port that the server is listening on
const host = '127.0.0.1';
const socket = new JsonSocket(new net.Socket()); //Decorate a standard net.Socket with JsonSocket
socket.connect(port, host);
socket.on('connect', function () { //Don't send until we're connected
    socket.sendMessage({ a: 5, b: 7 });
    socket.on('message', function (message) {
        console.log('The result is: ' + message.result);
    });
});
