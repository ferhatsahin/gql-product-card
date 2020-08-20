import React from "react";

import { renderApollo, cleanup } from "../test.utils";
import { PRODUCTS_QUERY } from "../pages/ProductsPage";
import App from "../App";
import mocked from "../mocked";

describe("render App.js", () => {
  afterEach(cleanup);

  const mocks = [
    {
      request: { query: PRODUCTS_QUERY },
      result: { data: { products: mocked } }
    }
  ];

  it("renders without error", () => {
    renderApollo(<App />, {
      mocks,
      resolvers: {}
    });
  });
});
