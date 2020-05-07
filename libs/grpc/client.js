/**
 * 
 */

const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');
const packageDefinition = protoLoader.loadSync(
  __dirname + '/helloworld.proto',
  {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true
  });
const hello_proto = grpc.loadPackageDefinition(packageDefinition).helloworld;

function main() {
  const client = new hello_proto.Greeter('localhost:50051',
    grpc.credentials.createInsecure());
  let user;
  if (process.argv.length >= 3) {
    user = process.argv[2];
  } else {
    user = 'world';
  }
  client.sayHello({ name: user }, function (err, response) {
    console.log('Greeting:', response.message);
  });
}

main();
