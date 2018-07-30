/**
 * Creator: Tang Xiaoji
 * Time: 2018-07-28
 */

'use strict';

const dns = require('dns');

// dns.lookup('', (err, address, family) => {
//   console.log('address: %j family: IPv%s', address, family);
// });

dns.resolve4('txiaozhe.top', (err, addresses) => {
  if (err) throw err;

  console.log(`IP 地址: ${JSON.stringify(addresses)}`);

  addresses.forEach((a) => {
    dns.reverse(a, (err, hostnames) => {
      if (err) {
        throw err;
      }
      console.log(`IP 地址 ${a} 逆向解析到域名: hostnames`);
    });
  });
});
