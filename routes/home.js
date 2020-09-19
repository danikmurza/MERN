const {Router} = require('express')
const User = require('../models/User')
const router = Router()

router.get('/', async (req, res) => {
  try {
    const user = await User.find()
  
    await res.send({user})
  
  } catch (e) {
    console.log(e)
  }
})


module.exports = router
