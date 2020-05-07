const mysql = require('mysql');
const bluebird = require('bluebird');

const pool = mysql.createPool({
  host: '106.15.227.154',
  port: 3306,
  connectionLimit: 10,
  user: 'root',
  password: 'Zhiliaoread.club2017',
  database: 'zhiliaoread'
});
pool.getConnection(function (err, connection) {
  // connected! (unless `err` is set)
  if (err) {
    console.log(err);
  } else {
    console.log('[D] mysql connected!');
  }
});
module.exports = bluebird.promisifyAll(pool);