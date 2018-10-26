'use strict';

var asyncHooks = require('async_hooks')
var http = require('http')
var fs = require('fs')

var hooks = {
  init: init
}
var asyncHook = asyncHooks.createHook(hooks)
asyncHook.enable()

http.createServer(function (req, res) {
  res.end('hello qts')
}).listen(8079)

function init (asyncId, type, triggerId) {
    fs.writeSync(1, `${type} \n`)
}
