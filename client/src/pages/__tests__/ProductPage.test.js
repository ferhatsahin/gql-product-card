import React from "react";

import { renderApollo, cleanup, waitForElement } from "../../test.utils";

import ProductPage, { PRODUCTS_QUERY } from "../ProductsPage";

const mockProduct = {
  id: 2,
  title: "IPhone-8",
  price: 2999.99,
  image: "https://cdn.akakce.com/apple/iphone-11-pro-64-gb-z.jpg",
  isLiked: false,
  cargoStatus: "FREE_SAME_DAY_SHIPPING"
};

describe("Products Page", () => {
  afterEach(cleanup);

  it("renders Products", async () => {
    const mocks = [
      {
        request: { query: PRODUCTS_QUERY },
        result: { data: { products: mockProduct } }
      }
    ];
    renderApollo(<ProductPage />, {
      mocks,
      resolvers: {}
    });
  });
});
