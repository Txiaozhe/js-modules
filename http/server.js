var http = require('http')
var url = require('url')

var proxy = http.createServer(function (req, res) {
    switch(req.method) {
        case 'GET': {
            console.log(req.url, url.parse(req.url), req.headers)
            res.end('success')
            break
        }
        case 'POST': {
            req.on('data', chunk => {
                console.log(req.url, url.parse(req.url))
                var d = JSON.stringify(chunk.toString())
                console.log(JSON.parse(d))
                console.log(req.url)
        
                res.end('success')
            })
            break
        }
        default:
            res.end(`unknow request type: ${req.method}`)
    }
})

proxy.listen(4201)
