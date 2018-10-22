const dayjs = require('dayjs');

console.log(dayjs('2018-08-08')); // parse

console.log(dayjs().format('{YYYY} MM-DDTHH:mm:ss SSS [Z] A')); // display

console.log(dayjs().set('month', 3).month()); // get & set

console.log(dayjs().add(1, 'year')); // manipulate

console.log(dayjs().isBefore(dayjs())); // query