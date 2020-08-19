const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    products: [Product]
    product(id: ID!): Product 
  }

  type Product {
    id: ID!
    title: String
    price: Float!
    image: String
    isLiked: Boolean!
    cargoStatus(status: cargoStatuses): String
  }

  enum cargoStatuses {
    FREE_SHIPPING
    FREE_SAME_DAY_SHIPPING
    PAID_SHIPPING
  }

`;

module.exports = typeDefs;