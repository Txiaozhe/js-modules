const moment = require('moment');

const record = {
	"code": 0,
	"data": [{
		"danmuNum": 53,
		"dateTime": "05/18",
		"endTime": "05/18 18:17",
		"endTS": "1526638662",
		"gratuityNum": 2,
		"liveTime": 15568,
		"maxGratuity": 6.6,
		"onlineMax": 0,
		"profit": 10,
		"startTime": "05/18 13:58",
		"startTS": "1526623094"
	}, {
		"danmuNum": 47,
		"dateTime": "05/19",
		"endTime": "05/19 20:16",
		"endTS": "1526732172",
		"gratuityNum": 2,
		"liveTime": 24645,
		"maxGratuity": 0,
		"onlineMax": 0,
		"profit": 0,
		"startTime": "05/19 13:25",
		"startTS": "1526707527"
	}, {
		"danmuNum": 5,
		"dateTime": "05/20",
		"endTime": "05/20 17:58",
		"endTS": "1526810318",
		"gratuityNum": 2,
		"liveTime": 15891,
		"maxGratuity": 1,
		"onlineMax": 0,
		"profit": 1,
		"startTime": "05/20 13:33",
		"startTS": "1526794427"
	}, {
		"danmuNum": 48,
		"dateTime": "05/21",
		"endTime": "05/21 19:42",
		"endTS": "1526902971",
		"gratuityNum": 2,
		"liveTime": 22882,
		"maxGratuity": 99.9,
		"onlineMax": 0,
		"profit": 100,
		"startTime": "05/21 13:21",
		"startTS": "1526880089"
	}, {
		"danmuNum": 52,
		"dateTime": "05/23",
		"endTime": "05/23 05:18",
		"endTS": "1527023922",
		"gratuityNum": 2,
		"liveTime": 56601,
		"maxGratuity": 0,
		"onlineMax": 0,
		"profit": 0,
		"startTime": "05/22 13:35",
		"startTS": "1526967321"
	}, {
		"danmuNum": 59,
		"dateTime": "05/23",
		"endTime": "05/23 17:13",
		"endTS": "1527066803",
		"gratuityNum": 2,
		"liveTime": 15130,
		"maxGratuity": 3,
		"onlineMax": 0,
		"profit": 3,
		"startTime": "05/23 13:01",
		"startTS": "1527051673"
	}]
}

let _record = {};
let all_time = 0;
if (record && record.code === 0) {
    record.data.sort((r1, r2) => r1.startTS - r2.startTS).forEach(rec => {
        const endDate = moment(parseInt(rec.endTS) * 1000).format('YYYY-MM-DD');
        const startDate = moment(parseInt(rec.startTS) * 1000).format('YYYY-MM-DD');
        all_time += rec.endTS - rec.startTS;
        if(endDate !== startDate) {
            _record[startDate] = moment(startDate + ' 23:59:59').unix() - rec.startTS
            _record[endDate] = rec.endTS - moment(endDate + ' 00:00:00').unix();
        } else {
            if(_record[startDate]) {
                _record[startDate] += rec.endTS - rec.startTS;
            } else {
                _record[startDate] = rec.endTS - rec.startTS;
            }
        }
    });

    _record = {
        all: all_time,
        everyday: Object.keys(_record).map(key => {
            return {
                data: _record[key] / 60,
                datetime: moment(key).format('YYYY/MM/DD')
            }
        })
    }
    console.log(_record);
}

// [ '2018-05-18': 15568,
//   '2018-05-19': 24645,
//   '2018-05-20': 15891,
//   '2018-05-21': 22882,
//   '2018-05-22': 56601,
//   '2018-05-23': 15130 ] 71731
