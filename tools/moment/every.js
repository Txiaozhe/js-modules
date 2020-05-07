'use strict';

const moment = require('moment');

function getEveryday(from, to) {
  const res = [];
  for (let i = Number(from); i < Number(to); i += 24 * 60 * 60 * 1000) {
    res.push(i);
  }

  return res;
}


const e_d = getEveryday(1548659417000, 1548918617000);

for (const ed of e_d) {
  console.log(moment(ed).utcOffset(8).format('YYYY-MM-DD'));
}

function getEveryday2(from, to) {
  const res = [];
  for (let i = Number(from); i < Number(to); i = (moment(i).add(1, 'd').unix() * 1000)) {
    res.push(i);
  }
  return res;
}

const e_d2 = getEveryday2(1548659417000, 1548918617000);
console.log('=======');
for (const ed of e_d2) {
  console.log(moment(ed).utcOffset(8).format('YYYY-MM-DD'));
}

function getEveryWeek(from, to) {
  const res = [];
  for (let i = Number(from); i < Number(to); i = (moment(i).add(1, 'w').unix() * 1000)) {
    res.push(i);
  }
  return res;
}
const e_w = getEveryWeek(1548054617000, 1548918617000);

console.log('=======');
for (const ew of e_w) {
  console.log(moment(ew).utcOffset(8).format('YYYY-MM-DD'));
}

function getEveryMonth(from, to) {
  const res = [];
  for (let i = Number(from); i <= Number(to); i = (moment(i).add(1, 'M').unix() * 1000)) {
    res.push(i);
  }
  return res;
}
const e_m = getEveryMonth(1548864000000, 1551283200000);

console.log('=======');
for (const em of e_m) {
  console.log(moment(em).utcOffset(8).format('YYYY-MM'));
}
