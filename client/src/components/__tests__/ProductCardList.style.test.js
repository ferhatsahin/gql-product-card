import React from "react";
import { render, cleanup } from "../../test.utils";

import {
  NotFoundText,
  PageTitle,
  CardContainer
} from "../ProductCardList.style";

afterEach(cleanup);

test("NotFoundText renders", () => {
  const { container } = render(<NotFoundText />);
  expect(container.firstChild).toMatchSnapshot();
  expect(container.firstChild).toHaveStyleRule("padding-left", "10px");
});

test("PageTitle renders", () => {
  const { container } = render(<PageTitle />);
  expect(container.firstChild).toMatchSnapshot();
  expect(container.firstChild).toHaveStyleRule("padding-left", "10px");
});

test("CardContainer renders", () => {
  const { container } = render(<CardContainer />);
  expect(container.firstChild).toMatchSnapshot();
  expect(container.firstChild).toHaveStyleRule("flex-wrap", "wrap");
});
