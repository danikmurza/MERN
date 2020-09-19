const {Router} = require('express')
const bcrypt = require('bcryptjs')
const config = require('config')
const jwt = require('jsonwebtoken')
const {check, validationResult} = require('express-validator')
const User = require('../models/User')
const router = Router()


router.delete('/user',
  async (req, res) => {
    const {_id} = req.body
    try {
      const user = await User.findByIdAndDelete(_id)
      res.status(201).json({message: `${user} delete`})
      
      
    } catch (e) {
      console.log(e)
    }
  })

router.get('/array',
  async (req, res) => {
    try {
      const user = await User.find()
      res.send(user)
      
    } catch (e) {
      console.log(e)
    }
  })


router.post(
  '/register',
  [
    check('email', 'Invalid email').isEmail(),
    check('password', 'Minimum password length 6 characters')
      .isLength({min: 6})
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req)
      
      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          message: 'Incorrect data during registration'
        })
      }
      
      const {email, password, firstName, lastName, phoneNumber} = req.body
      
      const candidate = await User.findOne({email})
      
      if (candidate) {
        return res.status(400).json({message: 'This user already exists'})
      }
  
      const hashedPassword = await bcrypt.hash(password, 12)
      const user = new User({
        email,
        password: hashedPassword,
        firstName,
        lastName,
        phoneNumber
      })
      
      await user.save()
  
      res.status(201).json({message: 'User created'})
      
    } catch (e) {
      res.status(500).json({message: 'Something went wrong, try again'})
    }
  })

// /api/auth/login
router.post(
  '/login',
  [
    check('email', 'Please enter a valid email').normalizeEmail().isEmail(),
    check('password', 'enter password').exists()
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req)
      
      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          message: 'Incorrect login data'
        })
      }
      
      const {email, password} = req.body
      
      const user = await User.findOne({email})
      
      if (!user) {
        return res.status(400).json({message: 'User is not found'})
      }
      
      const isMatch = await bcrypt.compare(password, user.password)
      
      if (!isMatch) {
        return res.status(400).json({message: 'Invalid password, try again'})
      }
      
      const token = jwt.sign(
        {userId: user.id},
        config.get('jwtSecret'),
        {expiresIn: '1h'}
      )
      
      res.json({token, userId: user.id})
      
    } catch (e) {
      res.status(500).json({message: 'Something went wrong, try again'})
    }
  })


module.exports = router
