const globby = require('globby');

(async () => {
	const paths = await globby(['*']);

	console.log(paths); // [ 'LICENSE', 'README.md', 'package-lock.json', 'package.json' ]
})();