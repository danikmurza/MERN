const express = require('express')
const path = require('path')
const config = require('config')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json({ extended: true }))

app.use(express.static(path.join(__dirname, 'client')))
app.use(express.urlencoded({extended: true}))

app.use('/home', require('./routes/home'))
app.use('/api/books', require('./routes/books'))
app.use('/api/auth', require('./routes/auth'))

const PORT = config.get('port') || 5000

async function start() {
  try {
    await mongoose.connect(config.get('mongoUri'), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
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


