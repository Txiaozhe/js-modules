'use strict';

const Subscription = require('egg').Subscription;
const moment = require('moment');

class UpdateCache extends Subscription {
  static get schedule() {
    return {
      cronOptions: {
        tz: 'Asia/Tokyo',
      },
      cron: '0 35 15 * * *',
      // interval: '1s',
      type: 'worker',
    };
  }

  async subscribe() {
    console.log('........', moment().format('YYYY-MM-DD HH:mm:ss'));
  }
}

module.exports = UpdateCache;
