const mongoose = require('mongoose')

mongoose.connect(process.env.MONGOD_HOST || 'mongodb://localhost/estoque')
mongoose.Promise = global.Promise

module.exports = mongoose