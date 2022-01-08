const express = require('express')
const productsCtrl = require('./controllers/productsController')

const app = express()
const SERVER_PORT = 4000

app.use(express.json())

app.get('/api/products', productsCtrl.getAllProducts)
app.get('/api/products/:id', productsCtrl.getProductById)

app.listen(SERVER_PORT, () => console.log(`Listening on port ${SERVER_PORT}`))
