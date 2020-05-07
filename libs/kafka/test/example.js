const kafka = require('kafka-node'),
Producer = kafka.Producer,
KeyedMessage = kafka.KeyedMessage,
client = new kafka.Client('10.4.19.207:2181'),
producer = new Producer(client),
km = new KeyedMessage('key', 'message'),
payloads = [
    { topic: 'topic1', messages: 'hi', partition: 0 }
];
producer.on('ready', function () {
    console.log('ready...');

    producer.send(payloads, function (err, data) {
        console.log('sending...');
        if(err) {
            console.log('error: ', err);
        } else {
            console.log('data', data);
        }
    });
});

producer.on('error', function (err) {
    console.log('error event', err);
});