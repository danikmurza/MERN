const {Router} = require('express')
const Books = require('../models/books')
const router = Router()

router.get('/', async (req, res) => {
  try {
    const books = await Books.find()
    res.send(books)
  }catch (e) {
    console.log(e)
  }
})
router.post('/register', async (req, res)=>{
  const books = new Books({})
  
  await books.save()
  
  res.status(201).json({message: 'Book Added'})
})

router.post('/edit', async (req, res) => {
  const {id} = req.body
  delete req.body.id
  await Books.findByIdAndUpdate(id, req.body)
  res.redirect('/books')
})


router.post('/buy', async (req, res) => {
  const {id} = req.body
  delete req.body.id
  await Books.findByIdAndUpdate(id, req.body)
  res.redirect('/books')
})

module.exports = router
