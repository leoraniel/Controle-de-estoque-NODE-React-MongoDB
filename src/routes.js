const routes = require('express').Router()

routes.get('/produtos', (req,res) => {
    res.json({msg: 'Usuarios!'})
})

routes.post('/produtos', (req,res) => {
    const nome = req.body.nome
    res.json({msg : `Nome do produto: ${nome}`})
})


module.exports = routes