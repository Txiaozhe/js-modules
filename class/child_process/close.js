'use strict';

const child = require('child_process').fork('/Users/jimtang/GitHub/js-modules/child_process/cmd.js', [], {
    env: process.env,
    silent: true,
    stdio: 'pipe',
})

child.stdout.on('data', data => {
    console.log('stdout data: ', data.toString());
})

child.stderr.on('data', data => {
    console.log('error data: ', data.toString());
})

child.on('error', err => {
    logger.error('core process error', err)
})

child.on('close', (code, signal) => {
    console.log('close: ', code, signal)
})
