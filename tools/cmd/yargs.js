#!/usr/bin/env node
var argv = require('yargs')
  .demand(['n'])
  .default({n: 'tom'})
  .describe({n: 'your name'})
  .argv;

console.log('hello ', argv.n);

// ./yargs.js --help
// ./yargs.js -n hhh
