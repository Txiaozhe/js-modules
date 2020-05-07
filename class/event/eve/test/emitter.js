const emitter = require('../event/event');
setInterval(() => {
    emitter.emit('test');
    console.log('event emit');
}, 1000);
