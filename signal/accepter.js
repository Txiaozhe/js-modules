var that = this
var http = require('http');
http.createServer(function (req, res) {

    req.on('data', chunk => {
        var d = JSON.parse(chunk.toString())
        if (d.action === 'stop') {
          console.log('stop...')
        } else {
          console.log('===> data')
          that._handleDeviceChannel(d.data)
        }
    })
    res.end('success');
}).listen(8000)
