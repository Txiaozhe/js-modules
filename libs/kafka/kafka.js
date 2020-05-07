const kafka = require('kafka-node');
const KeyedMessage = kafka.KeyedMessage;
const Producer = kafka.Producer;
const client = new kafka.Client('116.62.153.212:2181');
const producer = new Producer(client);
console.log('连接kafka中');

class toKafka {

    static produce(key, message, cb) {
        console.log(4);

        let payloads = [
            { topic: 'DataCloudLevel', messages: new KeyedMessage(key, message) }
        ];

        producer.on('ready', function () {
            console.log(3)
        });

        producer.on('error', function (err) {
            console.log('[E] ', err);
        });

        producer.send(payloads, function (err, data) {
            if (!!err) {
                console.log('[E] ', err.toString())
            }
            console.log(data);
            console.log(key + message);
            cb(data);
        });
    }
}

module.exports = toKafka;
