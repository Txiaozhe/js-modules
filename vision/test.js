

const start_cache_overview_time = 1523030399999;
const moment = require('moment');

function dayDateToTS(date) {
  return moment(date).utcOffset(8).startOf('day') * 1;
}

const today_start = dayDateToTS();

function getEveryday(from, to) {
    const res = [];
    for (let i = Number(from); i < Number(to); i += 24 * 60 * 60 * 1000) {
      res.push(i);
    }

    return res;
}

for (const day_ts of getEveryday(start_cache_overview_time, today_start).reverse()) {
  console.log(moment(day_ts).format('YYYY-MM-DD'))
  console.log(day_ts);
  // console.log(day_ts);
}
