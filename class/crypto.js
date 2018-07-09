var crypto=require('crypto');

var md5=crypto.createHash("md5");
var str = md5.update("000000").digest('hex');
console.log(str);

const arr = new Array(5);
console.log(arr[1]);
