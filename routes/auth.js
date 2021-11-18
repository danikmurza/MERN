const {Router} = require('express')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('../config/default.json')
const {check, validationResult} = require('express-validator')
const sgMail = require('@sendgrid/mail')
const regEmail = require('../email/registration')
const restEmail = require('../email/reset')
sgMail.setApiKey(config.emailSender)
const User = require('../models/User')
const router = Router()




router.post('/upload', async (req, res) => {
  try {
    console.log(req.files.file.name)
    console.log(req.body.name)
    let sampleFile = req.files.file;
    
    // Use the mv() method to place the file somewhere on your server
    await sampleFile.mv(`./public/images/${req.body.name}.JPG`);
    
    await User.findByIdAndUpdate(req.body.name, {avatarUrl: "http://localhost:5000/api/auth/public/images/" + req.body.name + ".JPG"})
    const user = await User.findById(req.body.name)
    const token = await jwt.sign({userId: user._id}, user.jwtSecret, {expiresIn: '1h'})
    
    res.json({token, userId: user.id, user})
  } catch (e) {
    res.status(500).json({message: 'Something went wrong, try again'})
  }
})

router.post('/register', [
  check('email', 'Invalid email').isEmail(),
  check('password', 'Minimum password length 6 characters')
    .isLength({min: 6})
], async (req, res) => {
  try {
    console.log(req.body)
    const errors = validationResult(req)
    
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
        message: 'Incorrect data during registration'
      })
    }
    
    const {email, password, firstName, lastName, phoneNumber, jwtQuestion, jwtSecret} = req.body
    
    console.log(req.body)
    const candidate = await User.findOne({email})
    
    if (candidate) {
      return res.status(400).json({message: 'This user already exists'})
    }
    
    const salt = await bcrypt.genSalt(12)
    const hashedPassword = await bcrypt.hash(password, salt)
    
    const user = new User({email, password: hashedPassword, firstName,
      lastName, phoneNumber, jwtQuestion, jwtSecret})
    
    await user.save()
    sgMail.send(regEmail(email))
        .then((res) => {console.log("response ", res)},
            error => {console.error("Eroor", error)})

  
    const token = jwt.sign({userId: user.id}, user.jwtSecret, {expiresIn: '1h'})
  
    res.json({token, userId: user.id, user})
    
  } catch (e) {
    res.status(500).json({message: 'Something went wrong, try again'})
  }
})

router.post('/login', [
  check('email', 'Please enter a valid email').normalizeEmail().isEmail(),
  check('password', 'enter password').exists()
], async (req, res) => {
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
    console.log(user)
    if (!isMatch) {
      return res.status(400).json({message: 'Invalid password, try again'})
    }
    const token = jwt.sign({userId: user.id}, user.jwtSecret, {expiresIn: '1h'})
    
    res.json({token, userId: user.id, user})
    
  } catch (e) {
    console.log(e)
    res.status(500).json({message: 'Something went wrong, try again'})
  }
})

router.post('/update', async (req, res) => {
  try {
    const {url} = req.body
    const errors = validationResult(req)
    console.log(req.body)
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
        message: 'Incorrect login data'
      })
    }
    if (url === "update") {
      console.log("update", url)
      const {_id, firstName, lastName, password, phoneNumber, jwtSecret, jwtQuestion} = req.body
      const user = await User.findById({_id})
      let hashedPassword = ''
      if (password.length > 0) {
        const salt = await bcrypt.genSalt(12)
        hashedPassword = await bcrypt.hash(password, salt)
      }
      if (password.length === 0) {
        hashedPassword = user.password
      }
      await User.findByIdAndUpdate(_id, {
        firstName: firstName, lastName: lastName, phoneNumber: phoneNumber,
        password: hashedPassword, jwtSecret: jwtSecret, jwtQuestion: jwtQuestion
      })
    }
    if (url === "orders") {
      console.log("orders", url)
      const {_id, orders} = req.body
      await User.findByIdAndUpdate(_id, {$push: {orders}})
    }
    if (url === "address") {
      console.log("address", url)
      const {_id, address, action} = req.body
      if (action === 'addAddress') {
        await User.findByIdAndUpdate(_id, {$push: {address}})
      }
      if (action === 'deleteAddress') {
        await User.findByIdAndUpdate(_id, {$pull: {address}})
      }
    }
    const {_id} = req.body
    const users = await User.findById({_id})
    const token = jwt.sign({userId: users.id}, users.jwtSecret, {expiresIn: '1h'})
    res.json({token, userId: users._id, user: users})
    
  } catch (e) {
    res.status(500).json({message: 'Something went wrong, try agains'})
  }
})

router.post('/users', async (req, res)=>{
  try{
    if(req.body._id) {
      const users = User.find()
      res.send(users)
    }
  }catch (e){
    res.status(500).json({message: "whats wrong"})
  }
})

router.post('/recovery',
    [check('email', 'Please enter a valid email').normalizeEmail().isEmail()],
    async (req, res)=>{
  try{
    const {email} = req.body
    const user = await User.findOne({email})
    if(user){
      console.log("user", user.password)
      sgMail.send(restEmail(email, user.password))
          .then((res) => {console.log("response ", res)},
                  error => {
        console.error("Eroor", error.body);

        if (error.response) {
          console.error(error.response.body)
        }
      })


      res.status(201).json({message: `Your password send email: ${email}`})
    }
  }catch (e){
    res.status(500).json({message: 'Something went wrong, try again'})
  }
})
module.exports = router
