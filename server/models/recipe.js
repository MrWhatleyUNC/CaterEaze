const mongoose = require('mongoose')
const Schema = mongoose.Schema

const RecipeSchema = new Schema({
  dish: String,
  recipe: [{type: Schema.Types.ObjectId, ref: 'Ingredient'}]
})

module.exports = mongoose.model('Recipes', RecipeSchema, 'Recipes');