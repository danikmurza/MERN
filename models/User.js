const {Schema, model} = require('mongoose')

const user = new Schema({
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  firstName: {type: String},
  lastName: {type: String},
  phoneNumber: {type: String},
  date: {type: Date, default: Date.now},
  img: {type: String},
  jwtQuestion: {type: String, required: false},
  jwtSecret: {type: String, required: false},
  address: [{
    firstName: {type: String},
    lastName: {type: String},
    company: {type: String},
    country: String,
    city: String,
    line1: String,
    line2: String,
    primary: Boolean,
    postalCode: Number,
    
  }],
  creditCard: [{
    numberCard: Number,
    nameCard: String,
    expiration: Date,
    cvt: Number
  }],
  ticket: [],
  orders: [],
  avatarUrl: String
})

module.exports = model('User', user)
