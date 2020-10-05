
const {Router} = require('express')
const Product = require('../models/Products')
const router = Router()

router.get('/', async (req, res) => {
  try {
    const product = await Product.find()
    res.send(product)
  } catch (e) {
    res.status(500).json({message: `Something went wrong, try again  ${e}`})
  }
})

router.post('/add',
  async (req, res) => {
    const {name, brand, specification, price, count, img, type} = req.body
    console.log(req.body)
    try {
      
      const product = new Product({
        name, brand, specification, price, count, img, type
      })
      
      await product.save()
      
      res.status(201).json({message: 'Product Added'})
      
    } catch (e) {
      res.status(500).json({message: 'Something went wrong, try again'})
    }
  })

router.post('/review',
  async (req, res) => {
    const {_id, review} = req.body
    try {
      await Product.findByIdAndUpdate(_id, {$push: {review}})
      res.status(201).json({message: 'Product review add'})
    } catch (e) {
      res.status(500).json({message: 'Something went wrong, try again'})
    }
  })

router.post('/find', async (req, res) => {
  try {
    const product = await Product.find(req.body)
    res.send(product)
  } catch (e) {
    res.status(500).json({message: 'Something went wrong, try again'})
  }
})

router.post('/edit', async (req, res) => {
  const {_id} = req.body
  try {
    await Product.findByIdAndUpdate(_id, req.body)
    res.status(201).json({message: 'Product edited'})
  } catch (e) {
    res.status(500).json({message: 'Something went wrong, try again'})
  }
})


router.post('/buy', async (req, res) => {
  const {_id, count} = req.body
  try {
    const id = await Product.findOne({_id})
    if (!id) {
      return res.status(400).json({message: 'Processor is not found'})
    }
    await Product.findByIdAndUpdate(_id, {count})
    
    res.status(201).json({message: 'Buy Product'})
  } catch (e) {
    res.status(500).json({message: 'Something went wrong, try again'})
  }
})

module.exports = router
