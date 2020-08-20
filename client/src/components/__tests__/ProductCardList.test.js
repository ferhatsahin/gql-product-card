import React from "react";

import { render, cleanup } from "../../test.utils";
import ProductCardList from "../ProductCardList";
import mockedData from "../../mocked";

describe("Product Card List", () => {
  afterEach(cleanup);

  it("renders without error", () => {
    render(<ProductCardList productData={mockedData} />);
  });
});
