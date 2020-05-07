const emitter = require('../event/event');
emitter.on('test', () => {
    console.log('enevt on');
});
