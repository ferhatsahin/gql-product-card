const products = require('./datasources/products')
module.exports = {
  Query : {
    products: () => products
  }
}