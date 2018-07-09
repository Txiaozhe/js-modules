const request = require('superagent');

request
.get('http://visitor.fanxing.kugou.com/VServices/RoomService.RoomService.getInfo/2467872/')
.set('Host', 'visitor.fanxing.kugou.com')
.set('User-Agent', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.7 Safari/537.36')
.set('Connection', 'keep-alive')
.set('Cache-Control', 'max-age=0')
.set('Accept-Encoding', 'gzip, deflate')
.set('Upgrade-Insecure-Requests', 1)
.set('Referer', 'http://fanxing.kugou.com/2467872')
.set('X-Via', '1.1 PSzjjxdx2of153:6 (Cdn Cache Server V2.0)')
.set('X-Dscp-Value', '0')
.set('Content-Type', 'text/html; charset=utf-8')
.end((err, res) => {
  console.log(res.text);
});
