const mongoose = require('mongoose')
const Schema = mongoose.Schema

const OrderSchema = new Schema({
  mealType: {type: Schema.Types.ObjectId, ref: 'Menus'},
  GuestCount: Number,
  OrderDate: Date,
  EventDate: Date
})

module.exports = mongoose.model('Orders', OrderSchema, 'Orders');