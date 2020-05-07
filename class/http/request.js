var request = require("request");

// http://10.88.3.189:8000
var url = 'http://127.0.0.1:8000/de/dddd?de=ddd&hhh=kk'

var options = {
  method: 'POST',
  url: url,
  headers: 
   { 'cache-control': 'no-cache',
     Connection: 'keep-alive',
     'Content-Length': '20',
     'Accept-Encoding': 'gzip, deflate',
     Host: '127.0.0.1:8000',
     'Postman-Token': '13520165-ca0e-4904-a716-9e1e1fc6dba9,bb57ef56-2ac6-4ca8-aa32-418781ab05ec',
     'Cache-Control': 'no-cache',
     Accept: '*/*',
     'User-Agent': 'PostmanRuntime/7.16.3',
     'Content-Type': 'application/json' },
  body: { dede: 'dedee' },
  json: true
};

// let num = 0;

// function run() {
//   request(options, function (error, response, body) {
//     if (error) throw new Error(error);
//     console.log(body, num);

//     if (num < 10000) {
//       run()
//       num++
//     }
//   });
// }

// run()

// const task = []
// for(let i = 0; i < 1000; i++) {
//   task.push(new Promise((resolve, reject) => {
//     request(options, function (error, response, body) {
//       if (error)
//         reject(error)
//       console.log(body, num);
//     });
//   }))
// }

// Promise.all(task)

request(options, function (error, response, body) {
  if (error)
    console.log(error)
  console.log(body);
});
