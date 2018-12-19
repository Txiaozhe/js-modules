'use strict';

const moment = require('moment');

const time = moment('2018-12-19T14:20:40.499').utcOffset(480).format('YYYY-MM-DD HH:mm:ss');
console.log(time);
