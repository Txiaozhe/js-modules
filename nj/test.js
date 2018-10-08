const nunjucks = require('nunjucks');

nunjucks.configure('nj', { autoescape: true });
const str1 = nunjucks.render('index.nj', { foo: 'bar' });
console.log(str1);

nunjucks.configure({ autoescape: true });
const str2 = nunjucks.renderString('Hello {{ username }}', { username: 'James' });
console.log(str2);
