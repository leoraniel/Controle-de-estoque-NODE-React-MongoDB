const mongoose = require('../../database/index')

const productsSchema = new mongoose.Schema({
    name: {type: String, required: true},
    amount: {type: Number, required:true},
    createdAt: {type: Date, default: Date.now}
})

const product = mongoose.Model('product', productsSchema)

module.exports = products