const kafka = require('kafka-node');
const EventEmitter = require('events');

class KafkaProducer extends EventEmitter{
  constructor(clientOpt = {host: 'localhost:2181'}, producerOpt = {}, custom) {
    super();
    this.client = new kafka.Client(clientOpt.host, clientOpt.clientId, clientOpt.zkOptions, clientOpt.noAckBatchOptions, clientOpt.sslOptions);
    this.producer = new kafka.HighLevelProducer(this.client, producerOpt);
    this.writable = false;
    this.producer.on('ready', this.connectHandle.bind(this));
    this.producer.on('errorHandle', this.errorHandle.bind(this));
    this.producer.on('close', this.closeHandle.bind(this));
  }

  connectHandle() {
    console.debug('[D]kafkaProducer ready');
    this.writable= true;
  };

  errorHandle(err) {
    console.debug('[E]error', err);
    this.emit('error', err);
  }

  closeHandle() {
    console.debug('[D]socket closed');
  }

  async send(data,retry){
    if(!data.topic){
      return new Promise.reject('[E] params is invalid');
    }
    if(!this.writable){

    }
    return new Promise((resolve,reject)=>{
      this.producer.send([{topic: data.topic, messages: [data.message]}], (err, res) => {
        if(err)reject(err);
        resolve(res);
      });
    })
  }
}

module.exports = KafkaProducer;
