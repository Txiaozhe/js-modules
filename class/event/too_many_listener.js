const Emitter = require('events');

const emitter = new Emitter();

for (let i = 0; i < 10; i++) {
    emitter.on('test', () => {
        console.log('test listener warn');
    });
}

console.warn('jjj', emitter.listenerCount());
