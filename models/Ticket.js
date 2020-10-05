const {Schema, model} = require('mongoose')

const ticket = new Schema({
  userId: {type: String, required: false},
  subject: {type: String, required: false},
  ticketData: {type: Date, default: Date.now},
  ticketUpdate: {type: Date, default: Date.now},
  description: [],
  type: {type: String, required: false},
  priority: {type: String, required: false},
  status: Boolean
})

module.exports = model('Ticket', ticket)
