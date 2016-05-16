module.exports = {
	scripts: {
		loader: 'browserify',
		files: [
			'public/scripts/main.js'
		]
	},
	styles: {
		directory: 'public/styles'
	},
	server: {
		files: [
			'views/**/*.ejs',
			'routes/**/*.js',
			'models/**/*.js',
			'lib/**/*.js',
			'config/**/*.js',
			'errors/**/*.js',
			'app.js'
		]
	}
};
