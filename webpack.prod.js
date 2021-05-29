const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
	entry: {
		app: ['./js/index.js']
	},
	mode: 'production',
	resolve: {
		extensions: ['.js', '.jsx'],
		modules: [path.resolve(__dirname, 'src'), 'node_modules'],
		alias: {
			js: path.resolve('src/js'),
			components: path.resolve('src/js/components'),
			theme: path.resolve('src/js/theme'),
			core: path.resolve('src/js/core')
		}
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: ['babel-loader']
			},
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			}
		]
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			template: 'html/index.html',
			filename: 'index.html'
		})
	],
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, './build')
	},
	context: path.resolve(__dirname, 'src')
};
