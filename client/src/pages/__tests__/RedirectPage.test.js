import React from "react";

import { render, cleanup } from "../../test.utils";
import RedirectPage from "../RedirectPage";

describe("Redirect Page renders", () => {
  afterEach(cleanup);

  it("renders without error", () => {
    render(
      <RedirectPage/>
    );
  });
});
