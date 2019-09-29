var mqttServer = require('mqtt-server');

var config = {
  mqtt: {
    protocol: 'tcp',
    host: '0.0.0.0',
    port: 18833
  }
}

var servers

module.exports = newMQTTServer = function() {
  return new Promise(resolve => {
    if (!servers) {
      servers = mqttServer(config, {
        emitEvents: true
      }, function (client){
        client.connack({
          returnCode: 0
        });
      })
      servers.servers['mqtt'].on('error', err => {
        console.log(err)
      })
      servers.servers['mqtt'].on('published', packet => {
        console.log('published: ', packet.payload)
      })
      servers.listen(function() {
        console.log(`listening at:: ${config.mqtt.port}`)
        resolve(servers)
      });
    } else {
      resolve(servers)
    }
  })
}

newMQTTServer()
