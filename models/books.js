const {Schema, model} = require('mongoose')

const books = new Schema({
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  count: {
    type: Number
  },
  img: String
})

module.exports = model('Books', books)
