const _ = require('lodash');
const os = require('os');

const mem = _.ceil((1 - os.freemem() / os.totalmem()) * 100, 2) + '%'
console.log(mem);