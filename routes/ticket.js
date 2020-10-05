const {Router} = require('express')
const config = require('config')
const jwt = require('jsonwebtoken')
const User = require('../models/User')
const Ticket = require('../models/Ticket')
const router = Router()

router.post(
  '/a',
  async (req, res) => {
    try {
      const {userId} = req.body
      console.log(userId)
      const ticket = await Ticket.find({userId})
      res.json({ticket})
    } catch (e) {
      console.log(e)
      res.status(500).json({message: 'Something went wrong, try again'})
    }
  })

router.post(
  '/',
  async (req, res) => {
    try {
      
      const {userId, subject, type, priority, description, status} = req.body
      console.log(req.body)
      
      const ticket = await new Ticket({
        userId,
        subject,
        type,
        priority,
        description,
        status
      })
      await ticket.save()
      
      user = await User.findByIdAndUpdate(userId, {$push: {ticket}})
      
      const token = jwt.sign(
        {userId: user.id},
        config.get('jwtSecret'),
        {expiresIn: '1h'}
      )
      const users = await User.findById(userId)
      
      res.json({token, userId: user._id, user: users})
      
      
    } catch (e) {
      console.log(e)
      res.status(500).json({message: 'Something went wrong, try again'})
    }
  })

module.exports = router
