const Koa = require('koa');
const app = new Koa();

app.listen(3030);

console.log('start3');
setTimeout(() => {
    console.log('stop3');
}, 10000);
