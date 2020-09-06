const purgecss = require('@fullhuman/postcss-purgecss')

module.exports = {
	plugins: [
		purgecss({
			content: ['src/index.html'],
			whitelist: ['is-active'],
		}),
	],
}