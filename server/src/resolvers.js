const products = require('./datasources/products')
module.exports = {
  Query : {
    products: () => products,
    product: id => products.find(product => product.id === id)
  }
}