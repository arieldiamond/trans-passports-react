/* global module, require, __dirname */
const webpack = require('webpack');

module.exports = {
	entry: [
		'webpack-dev-server/client?http://0.0.0.0:8080',
    	'webpack/hot/only-dev-server',
		'./src/index.js'
	],
	output: {
		path: __dirname,
		publicPath: '/',
		filename: 'bundle.js'
	},
	devtool: 'source-map',
	module: {
		loaders: [{
			exclude: /node_modules/,
			loader: 'babel'
		}]
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	devServer: {
		historyApiFallback: true,
		contentBase: './'
	},
	plugins: [
		new webpack.ProvidePlugin({
			React: 'react'
		}),
		new webpack.DefinePlugin({
			DEBUG: true
		})
	]
};
