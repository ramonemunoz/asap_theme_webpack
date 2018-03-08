const { resolve } = require('path');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const WebpackNotifierPlugin = require('webpack-notifier');
const { getIfUtils } = require('webpack-config-utils');

module.exports = env => {
	const { ifProd, ifNotProd } = getIfUtils(env);
	return {
		context: resolve(),
		entry: './assets/scripts/main.js',
		output: {
			path: resolve('dist'),
			filename: 'bundle.js',
			publicPath: '/dist/'
		},
		devtool: ifProd('source-map', 'eval'),
		module: {
			loaders: [
				{ test: /\.js$/, exclude: /node_modules/, loaders: 'babel-loader', query: { presets: ['env'] } },
				{ test: /\.html$/, loader: 'raw-loader', exclude: /node_modules/ },
				{ test: /\.css$/, loader: 'style-loader!css-loader' },
				{
					test: /\.scss$/,
					use: [
						{
							loader: 'style-loader'
						},
						{
							loader: 'css-loader'
						},
						{
							loader: 'sass-loader',
							options: {
								includePaths: ['absolute/path/a', 'absolute/path/b']
							}
						}
					]
				},
				{
					test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/,
					loader: 'file-loader',
					options: { name: '[name].[ext]', outputPath: 'fonts/' }
				},
				{
					test: /\.(png|jpg|gif)$/,
					use: [
						{
							loader: 'file-loader',
							options: {
								name: '[name].[ext]',
								outputPath: 'images/'
							}
						},
						{
							loader: 'image-webpack-loader',
							options: {
								gifsicle: {
									interlaced: false
								},
								optipng: {
									enabled: 4
								},
								pngquant: {
									quality: '85-95',
									speed: 5
								},
								mozjpeg: {
									progressive: true,
									quality: 65
								}
								// Specifying webp here will create a WEBP version of your JPG/PNG images
								//webp: {
								//  quality: 75
								//}
							}
						}
					]
				}
			]
		},
		plugins: [
			new BrowserSyncPlugin({
				// browse to http://localhost:3000/ during development,
				// ./public directory is being served
				proxy: 'http://localhost.com/'
			}),
			new WebpackNotifierPlugin()
		]
	};
};
