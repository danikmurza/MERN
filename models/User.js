const {Schema, model} = require('mongoose')

const user = new Schema({
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  firstName: {type: String},
  lastName: {type: String},
  phoneNumber: {type: Number},
  date: {type: Date, default: Date.now},
  address: [{
    primary: Boolean,
    street: String,
    city: String,
    country: String,
    postalCode: Number
  }],
  creditCard: [{
    numberCard: Number,
    nameCard: String,
    expiration: Date,
    cvt: Number
  }],
  ticket: [{
    ticketName: String,
    ticketData: Date,
    ticketUpdate: Date,
    type: String,
    priority: String,
    status: Boolean
  }]
})

module.exports = model('User', user)
