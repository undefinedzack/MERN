const express = require('express')
const mongoose = require('mongoose')

const app = express()

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,PATCH")
    res.header("Access-Control-Allow-Headers", "Content-Type")
    next()
})
app.use(express.json())

const url = 'mongodb://127.0.0.1:27017/customers'
mongoose.connect('mongodb://localhost/customers', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => {
    console.log('we are connected!')
})

const customerRouter = require('./routes/customers')
app.use('/customers', customerRouter)

app.get('/', (req, res) => {
    res.send('server running')
})

app.listen(8888, (err) => {
    if (err) console.log(err)
})