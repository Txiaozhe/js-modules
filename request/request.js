
const request = require('request');
const demo_pb = require('./demo_pb');

request.get({ url: 'http://txiaozhe.top:3004' }, function(err, httpResponse, body){ 
    console.log(Buffer.from(body));
    // const val = demo_pb.DemoMessage.deserializeBinary(Object.values(JSON.parse(body)));
    // console.log(val.toObject());
})
