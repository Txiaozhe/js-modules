var mqtt = require('mqtt')

var test = {
  url: 'https://homebase-dev-test.rokid.com',
  username: 'R5GpaSPa9',
  password: 'hbtoken:device1.0:zbSJzskJcl'
}

var release = {
  url: 'https://homebase.rokid.com',
  username: 'poPQQQ0dI',
  password: 'hbtoken:device1.0:9ZAmkE6i9'
}

var local = {
  url: 'http://10.88.2.23:18833',
  username: '',
  password: ''
}

var opt = local

console.log(opt)

var reconnectTimer = null

function connect() {
  console.log('connecting......')
  var client = mqtt.connect(opt.url, {
    username: opt.username,
    password: opt.password,
    clientId: `mqttjs_${opt.username}`,
    reconnectPeriod: -1,
    rejectUnauthorized: false
  })

  client.on('connect', function () {
    console.log('connected')
  })

  client.on('message', function (topic, message) {
    console.log('~~~', message.toString())
  })

  client.once('offline', () => {
    console.log('offline...')
    console.log('-----------')
    clearTimeout(reconnectTimer)
    reconnectTimer = null
    reconnectTimer = setTimeout(() => {
      console.log('offline: reconnect after 1s')
      connect()
    }, 5000)
    connect()
  })

  client.once('error', err => {
    console.log(err, new Date())
    client.emit('offline')
  })

  client.on('reconnect', () => {
    console.log('reconnected....', new Date())
  })
}

connect()
