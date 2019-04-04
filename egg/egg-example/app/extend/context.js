'use strict';

const BAR = Symbol('Context#bar');

module.exports = {
  get jjj() {
    return this[BAR];
  },

  set jjj(v) {
    this[BAR] = v;
  },
};
