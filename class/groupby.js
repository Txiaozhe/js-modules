const _ = require('lodash');

const arr = [
    {
        danmuNum: 0,
        dateTime: "05/11",
        endTS: "1526047077",
        endTime: "05/11 13:58",
        gratuityNum: 0,
        liveTime: 13.866666666666667,
        maxGratuity: 0,
        onlineMax: 0,
        profit: 0,
        startTS: "1526046248",
        startTime: "05/11 13:44"
    },
    {
        danmuNum: 0,
        dateTime: "05/11",
        endTS: "1526047080",
        endTime: "05/11 13:58",
        gratuityNum: 0,
        liveTime: 13.866666666666667,
        maxGratuity: 0,
        onlineMax: 0,
        profit: 0,
        startTS: "1526046248",
        startTime: "05/11 13:44"
    },
    {
        danmuNum: 0,
        dateTime: "05/11",
        endTS: "1526047080",
        endTime: "05/11 13:58",
        gratuityNum: 0,
        liveTime: 13.866666666666667,
        maxGratuity: 0,
        onlineMax: 0,
        profit: 0,
        startTS: "1526046248",
        startTime: "05/11 13:45"
    },
    {
        danmuNum: 0,
        dateTime: "05/11",
        endTS: "1526047081",
        endTime: "05/11 13:58",
        gratuityNum: 0,
        liveTime: 13.866666666666667,
        maxGratuity: 0,
        onlineMax: 0,
        profit: 0,
        startTS: "1526046248",
        startTime: "05/11 13:45"
    }
]

const ao = _.groupBy(arr, 'startTime');
const obj = Object.keys(ao).map(key => {
    return _.minBy(ao[key], 'endTS')
});;

console.log(obj);