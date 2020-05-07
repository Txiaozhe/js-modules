const Emitter = require('events');
class MyEmitter extends Emitter {}
const emitter = new MyEmitter();
module.exports = emitter;
