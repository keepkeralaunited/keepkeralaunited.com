const fileLoader = {
	loader: 'file-loader',
	options: {
		context: 'src',
		name: '[path][name].[ext]',
	},
}

const htmlLoader = {
	loader: 'html-loader',
	options: {
		attributes: {
			list: [
				{
					tag: 'img',
					attribute: 'src',
					type: 'src',
				},
				{
					tag: 'link',
					attribute: 'href',
					type: 'src',
				},
				{
					tag: 'source',
					attribute: 'srcset',
					type: 'srcset',
				},
			],
		},
	},
}

const developerConfig = {
	module: {
		rules: [
			{
				test: /\.html$/i,
				exclude: /node_modules/,
				use: [fileLoader, 'extract-loader', htmlLoader],
			},
		],
	},
}

const productionConfig = {
	module: {
		rules: [
			{
				test: /\.html$/i,
				exclude: /node_modules/,
				use: [fileLoader, 'extract-loader', htmlLoader],
			},
		],
	},
}

module.exports = function getConfig(mode) {
	if (mode == 'development') return developerConfig
	if (mode == 'production') return productionConfig
}
