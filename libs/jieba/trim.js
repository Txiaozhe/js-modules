/**
 * Creator: Tang Xiaoji
 * Time: 2018-07-10
 */

'use strict';

const fs = require('fs');

fs.readFile('./jieba/screen_word', (err, res) => {
  if (err) {
    console.log(err)
  } else {
    res.toString().split('\n').forEach(w => {
      // console.log(`"${w}": "${w}",`)
      fs.appendFile('./jieba/trim_word.js', `"${w}": 1,\n`, (err, res) => {

      })
    });

  }
});
