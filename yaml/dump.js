var yaml = require('js-yaml');

yaml.safeLoadAll("{name: 'nnn'}", function (doc) {
  console.log(doc);
});
