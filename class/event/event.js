const EventEmitter = require('events');
const emitter = new EventEmitter();

class Event {
    constructor() {
        console.log('Event instances');
        emitter.on('hello', (msg) => {
            console.log('hello world!', msg);
        });

        emitter.emit('hello', 'jjjjj');
    }
}

module.exports = new Event();