const {Schema, model} = require('mongoose')

const product = new Schema({
  name: {
    type: String,
    required: true
  },
  brand: {
    type: String,
    required: true
  },
  specification: {
    type: String,
    required: false
  },
  review: [{
    author: {type: String, required: false},
    date: {type: Date, default: Date.now},
    rating: {type: Number, required: false},
    description: {type: String, required: false},
    email: {type: String, required: false},
    pros: {type: String, required: false},
    cons: {type: String, required: false}
  }],
  price: {
    type: Number,
    required: true
  },
  count: {
    type: Number,
    required: true
  },
  img: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  }
})

module.exports = model('Product', product)
