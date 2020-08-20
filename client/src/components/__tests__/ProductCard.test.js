import React from "react";

import { render, cleanup } from "../../test.utils";
import ProductCard from "../ProductCard";

describe("Product Card", () => {
  afterEach(cleanup);

  it("renders without error", () => {
    render(
      <ProductCard
        product={{
          id: 2,
          title: "IPhone-8",
          price: 2999.99,
          image: "https://cdn.akakce.com/apple/iphone-11-pro-64-gb-z.jpg",
          cargoStatus: "FREE_SAME_DAY_SHIPPING"
        }}
      />
    );
  });
});
