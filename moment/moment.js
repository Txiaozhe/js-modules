const moment = require('moment');

// const now = moment().toString();

// const hour = handle(now.hour());
// const minute = handle(now.minute());
// const second = handle(now.second());

// const time = parseInt(`${hour}${minute}${second}`);
// if (time >= 100 && time <= 300) {
//   console.log('up');
// }

// function handle(t) {
//   const th = 100 + parseInt(t);
//   return th.toString().slice(1);
// }

// const f = moment().toString().split(' ');
// console.log(f);
// console.log()
// const a = `${f[0]}, ${f[2]} ${f[1]} ${f[3]} ${(parseInt(f[4].substring(0, 2)) - 8).toString()}${f[4].substring(2)} GMT`;
// console.log(a);

// console.log(`http://${'xxxx'}/logstores?logstoreName=${'logstoreName'}&offset=${'offset'}&size=${'size'}`);


// const a = moment('2018-01-09 11:35:33').unix();
// console.log(a);

// console.log(moment().format('YYYY-MM-DD HH:mm:SS'));

// const ts = moment().unix() - 7 * 24 * 60 * 60
// console.log(ts);
// console.log(moment(ts * 1000).format('YYYYMMDD'));

// const from = '20171101';
// const to = '20190301';

// nextMunth(from, to, (now) => {
//     console.log(now);
// });

// function prefixInteger(num, n) {
//     return (Array(n).join(0) + num).slice(-n);
// }

// function nextMunth(from, to, cb) {
//     let year = moment(from).year();
//     let momth = moment(from).month() + 1;
//     let day = moment(from).date();
//     let now = parseInt(moment(from).format('YYYYMM'));
//     while(now <= parseInt(moment(to).format('YYYYMM'))) {
//         if(momth < 12) {
//             momth++;
//         } else {
//             momth = 1;
//             year++;
//         }
//         cb(now);
//         now = parseInt(`${year}${prefixInteger(momth, 2)}`);
//     }
// }

// const from = parseInt('20180101');
// const to = parseInt('20180302');

// for(let i = from; i <= to; i = parseInt(moment((moment(i.toString()).unix() + 24 * 60 * 60) * 1000).format('YYYYMMDD'))) {
//     console.log(i)
// }

// console.log(from.toString());
// console.log(moment(from.toString()).unix())

// const ts = 1524245282;

// console.log(moment(ts * 1000).utcOffset(+8).format('MM/DD HH:mm'));

// console.log(moment().unix());
// console.log(moment(1526896119).unix());
// console.log(moment().unix() - moment(1526896119000).unix())
// console.log(parseInt(100));

// console.log(moment().unix() - moment('1526899537000').unix())
// console.log(moment(Number(1531794771) * 1000).format('YYYY-MM-DD HH:mm:ss'));
// console.log(moment('2018.08.15').unix()) // error

let today = new Date();
      today = moment(`${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()} 00:00:00`).unix() * 1000;
console.log(today);

let date = moment(Number(1543248000000));
date = moment(`${date.year()}-${date.month()}-${date.date()} 00:00:00`).unix() * 1000;

console.log(date);

console.log(moment().utcOffset(8).startOf('day') * 1);


console.log(moment.duration().days());

console.log(moment('2018-09-01').utcOffset(8).subtract(1, 'day').format('YYYY-MM-DD'));
