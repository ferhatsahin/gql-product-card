import React from 'react';
import ReactDOM from 'react-dom';
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache
} from '@apollo/client';

import App from './App.js';
import GlobalStyle from './globalStyle'

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: 'http://localhost:4000/graphql',
  headers: {
    'client-name': 'Product Card [web]',
    'client-version': '1.0.0'
  }
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <GlobalStyle/>
    <App/>
  </ApolloProvider>,
  document.getElementById('root'),
);