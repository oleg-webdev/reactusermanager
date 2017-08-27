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
		extensions: [ '.js', '.jsx', '.json' ]
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
				warnings: true
			}
		})
	]
};
