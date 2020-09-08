const {Router} = require('express')
const User = require('../models/User')
const Books = require('../models/books')
const router = Router()

router.get('/', async (req, res) => {
  try {
    const books = await Books.find()
    const user = await User.find()
    await res.send({books, user})
  
  } catch (e) {
    console.log(e)
  }
})


module.exports = router
