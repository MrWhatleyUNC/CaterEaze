const mongoose = require('mongoose')
const Schema = mongoose.Schema

const InventorySchema = new Schema({
  item: String,
  units: String,
  quantity: Number
})

module.exports = mongoose.model('Iventory', InventorySchema, 'Inventory');