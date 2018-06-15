var path = require('path');
var webpack = require('webpack');

module.exports = {
	devtool: 'source-map',
	entry:[
		path.resolve(__dirname, 'src/index')
	],
	target: 'web',
	output: {
		path: path.resolve(__dirname, 'src'),
		publicPath: '/',
		filename: 'bundle.js'
	},
	plugins: [
     new webpack.LoaderOptionsPlugin({
       debug: true
     })
   ],
	module:{
		rules:[
			{test: /\.ts$/, exclude: /node_modules/, loader: 'awesome-typescript-loader'},
			{test: /\.css$/, exclude: /node_modules/, loader: 'style-loader!css-loader'}
		]
	},
	resolve:{
		extensions:['.js','.ts']
	}
}
