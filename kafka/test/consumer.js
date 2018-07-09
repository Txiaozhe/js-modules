const kafka = require('kafka-node');
const Consumer = kafka.Consumer;
const client = new kafka.Client('10.4.19.207:2181');
const Offset = kafka.Offset;
const offset = new Offset(client);

console.log('connecting...');

const topics = [
    {topic: 'topic1', partition: 0}
]

const options = {
// Auto commit config
    autoCommit: false,
    autoCommitMsgCount: 100,
    autoCommitIntervalMs: 1000,
// Fetch message config
    fetchMaxWaitMs: 100,
    fetchMinBytes: 1,
    fetchMaxBytes: 1024 * 10,
    fromOffset: true,
    fromBeginning: false
};

const consumer = new Consumer(
    client,
    topics,
    options
);

consumer.on('message', function(message) {
    const key = message.key.toString();
    console.log(key);

    if(key != -1) {
        console.log(message);

        try {
            const msg = JSON.parse(message.value);
        } catch (e) {
            console.log('[E] consumer error: ', e);
        }
    } else {
        console.log(message);
    }
});

consumer.on('error', function(err) {
    console.log('kafka error', err);
});
