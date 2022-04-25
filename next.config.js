const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')

module.exports = withPWA({
	pwa: {
		dest: 'public',
		runtimeCaching,
	},
	env: {
		NEXT_PUBLIC_YOUTUBE_KEY: process.env.NEXT_PUBLIC_YOUTUBE_KEY,
	}
})
