const KafkaProducer = require('./productor');
const k = new KafkaProducer('116.62.153.212:2181');

k.send({topic: 'hello', message: 'helloworld!'}).then((res) => {
    console.log('[D] ', res);
}).catch((err) => {
    console.log('[E] ', err.toString());
});
