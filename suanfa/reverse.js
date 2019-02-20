'use strict';

const assert = require('assert');

// input: 'abc bcd eof', print: 'cba dcb foe'
function reverseWords(str) {
  if (!str) {
    return '';
  }

  const r = [];
  for (const s of str.split(' ')) {
    r.push(reve(s));
  };

  return r.join(' ');
}

function reve(str) {
  const res = [];
  for(let i = 0; i < str.length; i++) {
    res[str.length - 1 - i] = str[i];
  }

  let s = '';
  for (const r of res) {
    s += r;
  }

  return s;
}

// more concise
function reverseWords1(str) {
  return str.split(' ').map(function(word){
    return word.split('').reverse().join('');
  }).join(' ');
}


describe('Fixed Tests', () => {
  it('Tests', () => {
    assert.deepEqual(reverseWords('The quick brown fox jumps over the lazy dog.'), 'ehT kciuq nworb xof spmuj revo eht yzal .god');
    assert.deepEqual(reverseWords('apple'), 'elppa');
    assert.deepEqual(reverseWords('a b c d'), 'a b c d');
    assert.deepEqual(reverseWords('double  spaced  words'), 'elbuod  decaps  sdrow');
  });

  it('Tests1', () => {
    assert.deepEqual(reverseWords1('The quick brown fox jumps over the lazy dog.'), 'ehT kciuq nworb xof spmuj revo eht yzal .god');
    assert.deepEqual(reverseWords1('apple'), 'elppa');
    assert.deepEqual(reverseWords1('a b c d'), 'a b c d');
    assert.deepEqual(reverseWords1('double  spaced  words'), 'elbuod  decaps  sdrow');
  });
});
