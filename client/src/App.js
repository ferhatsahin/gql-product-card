import React, { Fragment } from 'react';
import { Router } from '@reach/router';

import ProductsPage from './pages/ProductsPage';

export default function App() {
  return (
    <Router primary={false} component={Fragment}>
      <ProductsPage path="/" />
    </Router>
  );
}