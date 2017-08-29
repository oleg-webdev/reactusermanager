const path = require('path');
const webpack = require('webpack')

module.exports = {
	context: __dirname,
	entry: './app/index.jsx',
	output: {
		path: path.join(__dirname, 'public'),
		filename: 'bundle.js'
	},
	devServer: {
		publicPath: '/public/',
		historyApiFallback: true
	},
	resolve: {
		extensions: [ '.js', '.jsx', '.json' ],
		alias: {
			"TweenLite": path.resolve('node_modules', 'gsap/src/uncompressed/TweenLite.js'),
			"TweenMax": path.resolve('node_modules', 'gsap/src/uncompressed/TweenMax.js'),
			"TimelineLite": path.resolve('node_modules', 'gsap/src/uncompressed/TimelineLite.js'),
			"TimelineMax": path.resolve('node_modules', 'gsap/src/uncompressed/TimelineMax.js'),
			"ScrollMagic": path.resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/ScrollMagic.js'),
			"animation.gsap": path.resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js'),
			"debug.addIndicators": path.resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js')
		}
	},
	stats: {
		colors: true,
		reasons: true,
		chunks: true
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				loader: 'babel-loader'
			},
			{
				loaders: [ 'style-loader', 'css-loader', 'sass-loader' ],
				test: /\.scss$/,
			}
		]
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify('production')
			}
		}),
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
			}
		})
	]
};
