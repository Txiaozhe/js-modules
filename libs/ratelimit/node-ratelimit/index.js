/**
 * Module dependencies.
 */

var assert = require('assert');
var microtime = require('./microtime');

/**
 * Expose `Limiter`.
 */

module.exports = Limiter;

/**
 * Initialize a new limiter with `opts`:
 *
 *  - `id` identifier being limited
 *  - `db` redis connection instance
 *
 * @param {Object} opts
 * @api public
 */

function Limiter(opts) {
  this.id = opts.id;
  this.db = opts.db;
  this.tidy = opts.tidy || false;
  assert(this.id, '.id required');
  assert(this.db, '.db required');
  this.max = opts.max || 2500;
  this.duration = opts.duration || 3600000;
  this.key = 'limit:' + this.id;
}

/**
 * Inspect implementation.
 *
 * @api public
 */

Limiter.prototype.inspect = function() {
  return '<Limiter id=' +
    this.id + ', duration=' +
    this.duration + ', max=' +
    this.max + '>';
};

/**
 * Get values and header / status code and invoke `fn(err, info)`.
 *
 * redis is populated with the following keys
 * that expire after N milliseconds:
 *
 *  - limit:<id>
 *
 * @param {Function} fn
 * @api public
 */

Limiter.prototype.get = function (fn) {
  var db = this.db;
  var tidy = this.key;
  var duration = this.duration;
  var key = this.key;
  var max = this.max;
  var now = microtime.now();
  var start = now - duration * 1000;
  var operations = [
    ['zremrangebyscore', key, 0, start], // 移除 key中 score 介于0 和 start 的成员
    ['zcard', key], // 获取 key 的基数
    ['zadd', key, now, now], // 添加 now: now 到key 中
    ['zrange', key, 0, 0], // 获取 0 ~ 0 之间的成员
    ['zrange', key, -max, -max], // 获取 -max ~ -max 之间的成员
    ['pexpire', key, duration], // 设置生存时间，单位毫秒
  ]
  if (tidy) {
    operations.splice(5, 0, ['zremrangebyrank', key, 0, -(max + 1)]) // 移除 0 ~ 0, -(max + 1) 之间的成员
  }
  db.multi(operations)
    .exec(function (err, res) {
      console.log(res)
      if (err) return fn(err);

      var isIoRedis = Array.isArray(res[0]);
      var count = parseInt(isIoRedis ? res[1][1] : res[1]);
      var oldest = parseInt(isIoRedis ? res[3][1] : res[3]);
      var oldestInRange = parseInt(isIoRedis ? res[4][1] : res[4]);
      var resetMicro = (Number.isNaN(oldestInRange) ? oldest : oldestInRange) + duration * 1000;
      console.log('oldest: ', oldest)
      console.log('oldestInRange: ', oldestInRange, ', resetMicro: ', resetMicro)

      fn(null, {
        remaining: count < max ? max - count : 0,
        reset: Math.floor(resetMicro / 1000000),
        resetMs: Math.floor(resetMicro / 1000),
        total: max
      });
    });
};

/**
 * Check whether the first item of multi replies is null,
 * works with ioredis and node_redis
 *
 * @param {Array} replies
 * @return {Boolean}
 * @api private
 */

function isFirstReplyNull(replies) {
  if (!replies) {
    return true;
  }

  return Array.isArray(replies[0]) ?
    // ioredis
    !replies[0][1] :
    // node_redis
    !replies[0];
}
