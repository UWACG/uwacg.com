var config = {
	local: {
		mode: 'local',
		port: 8080,
		mongo: {
			host: '127.0.0.1',
			port: 27017
		}
	},
	staging: {
		mode: 'staging',
		port: 8080,
		mongo: {
			host: '127.0.0.1',
			port: 27017
		}
	},
	production: {
		mode: 'production',
		port: 8080,
		mongo: {
			host: '127.0.0.1',
			port: 27017
		}
	}
}
module.exports = config.local;