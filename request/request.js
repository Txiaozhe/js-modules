
const request = require('request');

// request.post({
//     url: '127.0.0.1:8000',
//     json: {
//         ddd: 'kkk'
//     }
// }, function(err, httpResponse, body){ 
//     console.log(Buffer.from(body));
//     // const val = demo_pb.DemoMessage.deserializeBinary(Object.values(JSON.parse(body)));
//     // console.log(val.toObject());
// })

function run() {
    var task = []
    for(let i = 0; i < 100000; i++) {
        task.push(new Promise(resolve => {
            request.get('https://oj.xabc.site/api/announcement', function(err, httpResponse, body){ 
                resolve(Buffer.from(body).toString())
            })
        }))
    }
    
    Promise.all(task)
}

run()

