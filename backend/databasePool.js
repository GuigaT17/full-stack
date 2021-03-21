const {Pool} = require('pg')
const databaseConfig = require('./secrets/databaseConfiguration')

const pool = new Pool(databaseConfig)

module.exports = pool
