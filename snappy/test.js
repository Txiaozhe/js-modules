const snappy = require('snappy')
const fs = require('fs');

fs.readFile('./test.snappy', (err, buf) => {
    if (err) {
        console.log(err);
    } else {
        snappy.uncompress(buf, { asBuffer: false }, function (err, original) {
            fs.writeFile('/logs/logtail/test-oss-loghub.log', original);
        })
    }
});
