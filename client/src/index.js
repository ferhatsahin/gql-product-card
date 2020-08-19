import React from 'react';
import ReactDOM from 'react-dom';
import {
  ApolloClient,
  ApolloProvider,
  gql,
} from '@apollo/client';
import App from './App.js'
import './index.css'

import { cache } from './cache';

/* Apollo Client ayri dosyalara tasima ve gereksiz codelari silme */

export const typeDefs = gql`
  extend type Query {
    products: [Product]
  }
`;

const client = new ApolloClient({
  cache,
  uri: 'http://localhost:4000/graphql',
  headers: {
    'client-name': 'Product Card [web]',
    'client-version': '1.0.0'
  },
  typeDefs,
  resolvers: {},
});


ReactDOM.render(
  <ApolloProvider client={client}>
    <App/>
  </ApolloProvider>,
  document.getElementById('root'),
);