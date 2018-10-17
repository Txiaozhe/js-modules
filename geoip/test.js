'use strict';

const geoip = require('geoip-lite');

const ip = "125.119.101.107";
const geo = geoip.lookup(ip);

console.log(geo);
