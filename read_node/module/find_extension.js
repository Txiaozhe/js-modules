'use strict';

const path = require('path');

function Module(id, parent) {
  this.id = id;
  this.exports = {};
  this.parent = parent;
  // updateChildren(parent, this, false);
  this.filename = null;
  this.loaded = false;
  this.children = [];
}

Module._extensions = {};
Module._extensions['.js'] = () => {};
Module._extensions['.json'] = () => {};
Module._extensions['.node'] = () => {};
Module._extensions['.jst'] = () => {};

function findLongestRegisteredExtension(filename) {
  const name = path.basename(filename);
  let currentExtension;
  let index;
  let startIndex = 0;
  while ((index = name.indexOf('.', startIndex)) !== -1) {
    if (index === 0) continue; // Skip dotfiles like .gitignore
    startIndex = index + 1;
    currentExtension = name.slice(index);
    if (Module._extensions[currentExtension]) return currentExtension;
  }
  return '.js';
}

const ext = findLongestRegisteredExtension('/Users/jimtang/GitHub/js-modules/package.json');
console.log(ext);
