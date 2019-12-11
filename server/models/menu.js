const mongoose = require('mongoose')
const Schema = mongoose.Schema

const MenuSchema = new Schema({
  mealType: String,
  Recipes: [{type: Schema.Types.ObjectId, ref: 'Recipes'}]
})

module.exports = mongoose.model('Menus', MenuSchema, 'Menus');