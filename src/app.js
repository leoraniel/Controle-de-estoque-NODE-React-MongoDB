// Importações
const express = require('express')
const app = express()
const routes = require('./routes')
const cors = require('cors')

// App usar json para retornar dados
app.use(express.json())

// Permitindo que endereços diferente se conecte ao codigo
app.use(cors({ origin: true }))

// App usar as rotas criadas
app.use('/',routes)

module.exports = app