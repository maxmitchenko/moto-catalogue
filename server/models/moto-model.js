const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Motorcycle = new Schema(
    {
        mark: { type: String, required: true },
        model: { type: String, required: true },
        price: { type: Number, required: true },
    },
    { timestamps: true },
)

module.exports = mongoose.model('motorcycles', Motorcycle)