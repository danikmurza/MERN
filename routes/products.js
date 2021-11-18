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

router.post('/', async (req, res) => {
  const {url} = req.body
    try {
      if(url ==="add") {
        const {name, brand, specification, price, count, img, type} = req.body
        const product = await  new Product({name, brand, specification, price, count, img, type})
        await product.save()
        res.send(product)}
      if(url ==="review"){
        const {_id, review} = req.body
        const product = await Product.findByIdAndUpdate(_id, {$push: {review}})
        let products = []
        products.push(product)
        res.send(products)
      }if (url==="delete"){
       const product = await Product.findByIdAndDelete(req.body._id)
        res.status(201).json({message: `Product Delete ${product.name}`})
      }if (url==="edit"){
        const product = await Product.findByIdAndUpdate(req.body._id, req.body)
        res.status(201).json({message: `Product Updated ${product.name}`})
      }
    } catch (e) {
      res.status(500).json({message: 'Something went wrong, try again'})
    }
  })

module.exports = router
