const mongoose = require('mongoose')
const Schema = mongoose.Schema

const RecipeIngredient= new Schema({
    ingredient: String,
    quantity: Number,
    unit: String
})

module.exports = mongoose.model('Ingredient', RecipeIngredient, 'Ingredient');