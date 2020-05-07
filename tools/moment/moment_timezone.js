'use strict';

const moment = require('moment-timezone');

const mom = moment().tz('Asia/Shanghai').startOf('day').subtract(1, 'day');
console.log(mom.format('YYYY-MM-DD'))
console.log(mom.valueOf())
