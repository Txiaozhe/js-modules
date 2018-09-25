const Emitter = require('events');

const emitter = new Emitter();
// 只处理一次，所以不会无限循环
emitter.on('newListener', (event, listener) => {
    // 在开头插入一个新的监听器
    // emitter.on('event', () => {
        console.log('B');
    // });
});
emitter.on('event', () => {
    console.log('A');
});
emitter.emit('event');
