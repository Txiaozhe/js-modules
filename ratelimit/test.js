'use strict';

const redis = require('redis');
const client = redis.createClient()

const RateLimit = require('./node-ratelimit');

function test() {
  const limit = new RateLimit({
    id: 1,
    db: client
  });

  limit.get((err, li) => {
    console.log(li)
  });
}

test()
