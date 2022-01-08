const products = require('../products.json')
const delay = 1500

module.exports = {
  getAllProducts: (req, res) => {
    setTimeout(() => {
      res.status(200).send(products)
    }, delay)
  },

  getProductById: (req, res) => {
    const product = products.find((e) => e.id === +req.params.id)

    setTimeout(() => {
      if (product) {
        res.status(200).send(product)
      } else {
        res.status(404).send('Product not found')
      }
    }, delay)
  },
}
