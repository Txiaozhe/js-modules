const moment = require('moment');
const from = '2018-05-23';
const to = '2018-05-25';

const date_num = Math.ceil((moment(to).unix() - moment(from).unix()) / (3600 * 24));
// date_num 天前的数据
const day7_ago_from = parseInt(moment((moment(from).unix() - date_num * 24 * 3600) * 1000).format('YYYYMMDD'));
const day7_ago_to = parseInt(moment((moment(to).unix() - date_num * 24 * 3600) * 1000).format('YYYYMMDD'));

console.log(day7_ago_from, day7_ago_to);
