const mongoose = require('mongoose')
const Schema = mongoose.Schema

const querySchema = new Schema({
  latitude: Number,
  longitude: Number,
  radius: Number,
  places: Array
})

module.exports = mongoose.model('query', querySchema)
