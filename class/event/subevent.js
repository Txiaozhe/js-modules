const EventEmitter = require('events');
const subEmitter = new EventEmitter();

const ev = require('./event');
class SubEvent {
    constructor() {
        console.log('subevent instances');

        subEmitter.on('hello', () => {
            console.log('hello sub events');
        });

        subEmitter.emit('hello');
    }
}

module.exports = new SubEvent();
