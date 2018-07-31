const htmlparser = require("htmlparser");
const request = require('request');

function fetch(url) {
  const options = {
    url: url,
    headers: {
      'Connection': 'keep-alive',
      'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.84 Safari/537.36'
    }
  };

  return new Promise(function (resolve, reject) {
    request(options, (err, _, body) => {
      if (err) {
        reject(err);
      } else {
        resolve(body);
      }
    });
  });
}

fetch('https://chushou.tv/gamezone/vg/tjzb/1.htm').then(b => {
  // const arr = b.replace(/\s+/g, "").match(/gamezonePagePanel(\S*)globalPageBlock/)[1].split('class="video-item-container"');
  // arr.forEach(a => {
  //   const s = a.match(/video-title(\S*)/)
  //   console.log(a)
  // })

  var handler = new htmlparser.DefaultHandler(function (error, dom) {
    // if (error)
    // 	// console.log(error);
    // else
    // 	// console.log(dom);
  });
  var parser = new htmlparser.Parser(handler);
  parser.parseComplete(b);
  console.log(handler.dom, false, null);
}).catch(e => {
  console.log(e)
})
