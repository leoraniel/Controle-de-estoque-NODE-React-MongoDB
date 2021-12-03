// Importar mongoose para comunicação com o banco de dados
const mongoose = require('mongoose')

// Estabelecendo conexão com o banco
mongoose.connect(process.env.MONGOD_HOST || 'mongodb://localhost/estoque')
mongoose.Promise = global.Promise

module.exports = mongoose