const nunjucks = require('nunjucks');

// nunjucks.configure('views', { autoescape: true });
// nunjucks.render('index.html', { foo: 'bar' });

nunjucks.configure({ autoescape: true });
const str = nunjucks.renderString('Hello {{ username }}', { username: 'James' });
console.log(str);
