'use strict';

const crypto = require('crypto');

var md5 = crypto.createHash('SHA256');
var str = md5.update('000000').digest('hex');
console.log(str);

const sign = crypto.createSign('SHA256');
sign.update('000000');
console.log(sign.sign(require('/Users/jimtang/.ssh/id_rsa'), 'hex'));