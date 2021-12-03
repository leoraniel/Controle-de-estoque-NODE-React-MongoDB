// Importando modulo de products
const products = require('../models/products')
// Criando classe produto 
class ProductController{
    // Metodo para procurar todos os produtos
    async index(req, res) {
        try {
            const allProduct = await products.find()

            return res.status(200).json(allProduct) 
        } catch (err) {
            return res.status(400).json(err)
        }
    }
    // Metodo para procurar um unico produto
    async show(req, res) {
        const { _id } = req.params

        try {
            const oneProduct = await products.findOne({ _id })

            return res.status(200).json(oneProduct)
        } catch (err) {
            return res.status(400).json(err)
        }
    }
    // Metodo para adicionar produtos
    async create(req, res) {
        const { name, amount } = req.body
        
        try {
            const createdProduct = await products.create({ name, amount })
            
            return res.status(200).json(createdProduct)
        } catch (err) {
            return res.status(400).json(err)
        }
    }
    // Metodo para atualizar produtos
    async update(req, res) {
        const { _id } = req.params

        try {
            const updatedProduct = await products.updateOne({ _id }, req.body).exec()
            return res.status(200).json(updatedProduct)
        } catch (err) {
            return res.status(400).json(err)
            
        }
    }
    // Metodo para deletar produtos
    async delete(req, res) {
        const { _id } = req.params

        try {
            const deleteOneProduct = await products.deleteOne({ _id })
            
            return res.status(200).json(deleteOneProduct)
        } catch (err) {
            return res.status(400).json(err)
        }
    }
    
}
// Exportar a classe
module.exports = new ProductController()