import React from 'react';
import ReactDOM from 'react-dom';
import {
  ApolloClient,
  NormalizedCacheObject,
  ApolloProvider,
  useQuery,
  gql,
} from '@apollo/client';

import { cache } from './cache';

export const typeDefs = gql`
  extend type Query {
    products: [Product]
  }
`;

const client = new ApolloClient({
  cache,
  uri: 'http://localhost:4000/graphql',
  headers: {
    authorization: localStorage.getItem('token') || '',
    'client-name': 'Space Explorer [web]',
    'client-version': '1.0.0',
  },
  typeDefs,
  resolvers: {},
});


ReactDOM.render(
  <ApolloProvider client={client}>
    Hello Client
  </ApolloProvider>,
  document.getElementById('root'),
);