var node_env = process.env.NODE_ENV || 'development'
var defaultConfig = require('./env/default.json')
var environmentConfig = require('./env/' + node_env + '.json')

module.exports  = Object.assign(defaultConfig, environmentConfig)
