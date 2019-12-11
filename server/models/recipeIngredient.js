const mongoose = require('mongoose')
const Schema = mongoose.Schema

const RecipeIngredient= new Schema({
    ingredient: {type: Schema.Types.ObjectId, ref: 'Inventory'},
    quantity: Number,
    unit: String
})

module.exports = mongoose.model('Ingredient', RecipeIngredient, 'Ingredient');