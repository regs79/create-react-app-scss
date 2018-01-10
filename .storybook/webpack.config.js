var path = require('path');
var webpack = require('webpack');
var config = require('../config/webpack.config.dev.js'); // Getting the original webpack.config

module.exports = {
	resolve: {
		modules: config.resolve.modules,
	},
	plugins: [
	],
	module: config.module
};
