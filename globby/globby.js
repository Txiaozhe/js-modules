const globby = require('globby');

(async () => {
	const paths = await globby(['*']);

	console.log(paths);
})();