import React, { Fragment } from "react";
import { Router } from "@reach/router";

import ProductsPage from "./pages/ProductsPage";
import RedirectPage from './pages/RedirectPage';

export default function App() {
  return (
    <Router primary={false} component={Fragment}>
      <ProductsPage path="/" />
      <RedirectPage path="/redirected-page"/>
    </Router>
  );
}
