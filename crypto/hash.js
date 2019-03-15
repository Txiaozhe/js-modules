'use strict';

const crypto = require('crypto');

var sha256 = crypto.createHash('SHA256');
sha256.update('000000');
console.log(sha256.digest('hex'));
