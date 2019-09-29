const request = require('request');

let timer;
let all = 1200;

const SEARCH = {"responseChannel":"responses\/T1Lu2Ryj0","messageId":"HsBpKMhTM","type":"pingDevice","data":{"id":"7kDsdiBtH"}}
const LIST = {
  "responseChannel": "responses\/bouljqyh7",
  "messageId":"oLCExyWZR0",
  "type":"driverRequest",
  "data": {
    "api": "list",
    "version":"v1",
    "data":{
      "userAuth":{
        "userId":"101223927"
      }
    },
    "driver":{
      "id": "xiaomi-mijia",
      "config":{

      }
    },
    "options":{
      "traceId":"f18698ea85ad46958506b7077055fa11"
    }
  }
}

timer = setInterval(() => {
  request.post('http://10.88.3.189:8000', {
    json: { 
      action: 'search',
      data: LIST
    }
  }, function(err, httpResponse, body){
    all--;
    console.log(body, all);
  })
}, 1500)

setTimeout(() => {
  clearInterval(timer)
  request.post('http://10.88.3.189:8000', {
    json: {
      active: 'stop',
      data: SEARCH
    }
  }, function(err, httpResponse, body){
    console.log(body);
  })
}, 30 * 60 * 1000)
