'use strict';

const exec = require('child_process').exec

exec('uname -m', (err, stdout, stderr) => {
    console.log(err, stdout.split('\n')[0], stderr)
})
