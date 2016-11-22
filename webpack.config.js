/* global module, require, __dirname */
const webpack = require('webpack');

module.exports = {
	entry: [
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
			API_URL: 'http://localhost:3000/api/v1',
			DEBUG: true
		})
	]
};
