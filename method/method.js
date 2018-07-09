var method = require("method")
var m1 = method("/m1")
var m2 = method("/m2")
var m3 = method("/m3")

let obj = {};

obj[m1] = function() {
  return false;
}

obj[m2] = function() {
  return 'hello world';
}

obj[m3] = console.log;

m3('kkk');
