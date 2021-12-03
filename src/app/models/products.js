// Importar moongose para comunicar com o banco de dados
const mongoose = require('../../database/index')
// Criando um "esquema" para o banco de dados
const productsSchema = new mongoose.Schema({
    name: {type: String, required: true},
    amount: {type: Number, required: true},
    createdAt: {type: Date, default: Date.now}
})

const product = mongoose.model('product', productsSchema)


module.exports = product