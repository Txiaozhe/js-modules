'use strict';

const path = require('path');

function normalizePath(path) {
  var beginning = '';
  if (path.indexOf('/') === 0) {
    beginning = '/';
  }

  var input = path.split('/');
  console.log(input);
  var output = [];
  while (input.length > 0) {
    if (input[0] === '.' || (input[0] === '' && input.length > 1)) {
      input.shift();
      continue;
    }
    if (input[0] === '..') {
      input.shift();
      console.log(input);
      if (output.length > 0 && output[output.length - 1] !== '..') {
        output.pop();
      } else {
        throw new Error('Requested path is below root: ' + path);
      }
      continue;
    }
    output.push(input.shift());
  }
  return beginning + output.join('/');
};

normalizePath('../module/find_extension');
