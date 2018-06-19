const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
	devtool: 'source-map',
	entry:{
		vendor: path.resolve(__dirname, 'src/vendor'),
		main: path.resolve(__dirname, 'src/index')
	},
	target: 'web',
	output: {
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/',
		filename: '[name].[chunkhash].js'
	},
	optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    name: 'vendor'
                }
            }
        }
    },
	plugins: [
					// Generate an external css file with a hash in the filename
					new ExtractTextPlugin('[name].[md5:contenthash:hex:20].css'),

					// Create HTML file that includes reference to bundled JS.
					new HtmlWebpackPlugin({
						template: 'src/index.html',
						minify: {
							removeComments: true,
							collapseWhitespace: true,
							removeRedundantAttributes: true,
							useShortDoctype: true,
							removeEmptyAttributes: true,
							removeStyleLinkTypeAttributes: true,
							keepClosingSlash: true,
							minifyJS: true,
							minifyCSS: true,
							minifyURLs: true
						},
						inject: true,
						trackJSToken: 'acd82269f2a44a1eab76466ee1dd0a6f'
					}),

					//Minify js
					new UglifyJsPlugin({
        sourceMap: true
    }),

					//Set debug to true
					new webpack.LoaderOptionsPlugin({
       debug: true
     }),

					new webpack.SourceMapDevToolPlugin({
  					filename: "[file].map"
					}),

					// Hash the files using MD5 so that their names change when the content changes.
					new WebpackMd5Hash(),

					// Generate an external css file with a hash in the filename
					new ExtractTextPlugin('[name].[md5:contenthash:hex:20].css')
   ],
	module:{
		rules:[
			{test: /\.ts$/, exclude: /node_modules/, loader: 'awesome-typescript-loader'},
			//{test: /\.css$/, exclude: /node_modules/, loader: 'style-loader!css-loader'}
			{test: /\.css$/, loader: ExtractTextPlugin.extract('css-loader?sourceMap')}
		]
	},
	resolve:{
		extensions:['.js','.ts']
	}
}
