// const Class = require('./Class');

// const c = new Class('hello1');

// c.print();

// const a = "Wp.沐晴'♥ª".replace(/\'/g, "\\'");
// console.log(a);

const data = [
    ['row1', 'row2' + 2],
    ['aaaa', 'ddddd'],
    ['aaaa', 'ddddd'],
    ['aaaa', 'ddddd'],
]

const TCharts = require('tcharts.js');
const { Table } = TCharts;

const table = new Table(0.2); // set gap rate = 0.2
table.setData(data);
console.log(table.string());