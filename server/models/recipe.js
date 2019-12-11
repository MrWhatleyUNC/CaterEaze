const mongoose = require('mongoose')
const Schema = mongoose.Schema

const RecipeSchema = new Schema({
  dish: String,
  recipe: [{ingredient: String,
    quantity: Number,
    unit: String}]
})

module.exports = mongoose.model('Recipes', RecipeSchema, 'Recipes');