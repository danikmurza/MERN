const {Router} = require('express')
const bcrypt = require('bcryptjs')
const config = require('config')
const jwt = require('jsonwebtoken')
const {check, validationResult} = require('express-validator')
const User = require('../models/User')
const router = Router()
let multer = require('multer');

let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/images/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  }
});

let upload = multer({storage: storage});

router.post('/upload', upload.single('file'), async function (req, res) {
  // Text data from the form
  console.log(req.body);
  // Details about the uploaded file
  console.log(req.file);
  let imagePath = await req.file.path.replace(/^public\//, '');
  await User.findByIdAndUpdate(req.body.name, {avatarUrl: "http://localhost:5000/api/auth/public/" + imagePath})
  
  res.redirect(imagePath);
  res.end()
});


// router.post('/upload', async function (req, res) {
//   try {
//     const user = await User.findById(req.body.name)
//     if (user) {
//      await req.files.file.mv(`./picture/${req.body.name}`);
//     }
//     res.status(201).json({message: `upload file ${user._id}`})
//     res.end()
//   } catch (error) {
//     res.status(500).json({message: 'Something went wrong, try again'})
//   }
// });


// let storage = multer.diskStorage({
//
//   destination: function (req, file, cb) {
//     cb(null, './picture')
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.fieldname + '-' + Date.now()
//     )
//   }
// })
//
// let upload = multer({ storage: storage})
//
// router.post('/upload', upload.single('file'), (req, res, next) => {
//   const file = req.files
//   const name = req.body
//  // console.log(req.files)
//  //  if (!file) {
//  //    const error = new Error('Please upload a file')
//  //    error.httpStatusCode = 400
//  //    return next(error)
//  //  }
//    res.status(201).json({message: `upload file ${name}`})
//
// })


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
    
    const user = new User({
      email,
      password: hashedPassword,
      firstName,
      lastName,
      phoneNumber,
      jwtQuestion,
      jwtSecret
    })
    
    await user.save()
    
    res.status(201).json({message: 'User created'})
    
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
    if (!isMatch) {
      return res.status(400).json({message: 'Invalid password, try again'})
    }
    
    
    const token = jwt.sign({userId: user.id}, user.jwtSecret, {expiresIn: '1h'})
    
    res.json({token, userId: user.id, user})
    
  } catch (e) {
    res.status(500).json({message: 'Something went wrong, try again'})
  }
})

router.post('/update', async (req, res) => {
  try {
    const errors = validationResult(req)
    
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
        message: 'Incorrect login data'
      })
    }
    const {_id, firstName, lastName, password, phoneNumber} = req.body
    
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
      firstName: firstName,
      lastName: lastName,
      phoneNumber: phoneNumber,
      password: hashedPassword
    })
    
    const users = await User.findById({_id})
    const token = jwt.sign(
      {userId: user.id},
      user.jwtSecret,
      {expiresIn: '1h'}
    )
    
    
    res.json({token, userId: user.id, user: users})
    
  } catch (e) {
    res.status(500).json({message: 'Something went wrong, try again'})
  }
})

router.post('/address', async (req, res) => {
  try {
    const errors = validationResult(req)
    
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
        message: 'Incorrect login data'
      })
    }
    const {_id, address, action} = req.body
    console.log(req.body)
    let user = ''
    if (action === 'addAddress') {
      user = await User.findByIdAndUpdate(_id, {$push: {address}})
    }
    if (action === 'deleteAddress') {
      user = await User.findByIdAndUpdate(_id, {$pull: {address}})
    }
    const token = jwt.sign(
      {userId: user.id},
      config.get('jwtSecret'),
      {expiresIn: '1h'}
    )
    const users = await User.findById(_id)
    
    res.json({token, userId: user._id, user: users})
    
  } catch (e) {
    res.status(500).json({message: 'Something went wrong, try again'})
  }
})

router.post('/orders', async (req, res) => {
  try {
    const errors = validationResult(req)
    
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
        message: 'Incorrect login data'
      })
    }
    const {_id, orders} = req.body
    
    
    user = await User.findByIdAndUpdate(_id, {$push: {orders}})
    
    const token = jwt.sign(
      {userId: user.id},
      config.get('jwtSecret'),
      {expiresIn: '1h'}
    )
    const users = await User.findById(_id)
    
    res.json({token, userId: user._id, user: users})
    
  } catch (e) {
    res.status(500).json({message: 'Something went wrong, try again'})
  }
})


router.post('/l', [
  check('email', 'Please enter a valid email').normalizeEmail().isEmail(),
  check('password', 'enter password').exists()], async (req, res) => {
  try {
    const errors = validationResult(req)
    
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
        message: 'Incorrect login data'
      })
    }
    
    const {email, password, tok} = req.body
    
    const user = await User.findOne({email})
    
    
    if (!user) {
      return res.status(400).json({message: 'User is not found'})
    }
    
    const isMatch = await bcrypt.compare(password, user.password)
    
    if (!isMatch) {
      return res.status(400).json({message: 'Invalid password, try again'})
    }
    
    const isMatchToken = await jwt.verify(tok, user.jwtSecret)
    console.log(isMatchToken)
    if (!isMatchToken) {
      return res.status(400).json({message: 'Invalid'})
    }
    console.log(user.jwtSecret)
    
    const token = await jwt.sign(
      {userId: user.id},
      user.jwtSecret,
      {expiresIn: '1h'}
    )
    
    res.json({token, userId: user.id, user})
    
  } catch (e) {
    res.status(500).json({message: 'Something went wrong, try again'})
  }
})


module.exports = router
