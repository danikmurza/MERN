const bodyParser = require('body-parser');
const express = require('express')
const path = require('path')
const config = require('config')
const mongoose = require('mongoose')
const cors = require('cors')
const fileUpload = require('express-fileupload')



const app = express()

app.use(cors())
app.use(express.json())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(fileUpload({
  createParentPath: true,
  limits: { fileSize: 4 * 1024 * 1024 * 1024 },}))
app.use('/api/auth/public/images', express.static(path.join(__dirname, 'public/images')))

app.use('/api/ticket', require('./routes/ticket'))
app.use('/api/auth', require('./routes/auth'))
app.use('/api/product', require('./routes/products'))


const PORT = config.get('port') || 5000

async function start() {
  try {
    await mongoose.connect(config.get('mongoUri'), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    })
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}    -----------------------------------------------------------   ok`)
    })
  } catch (e) {
    console.log('Server Error', e.message)
    process.exit(1)
  }
}

start()


