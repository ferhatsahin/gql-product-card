import React from "react";
import { render, cleanup } from "../../test.utils";

import {
  PageContainer,
  InfoTab,
  Container,
  HeartIcon
} from "../ProductPage.style";

afterEach(cleanup);

test("PageContainer style test", () => {
  const { container } = render(<PageContainer />);
  expect(container.firstChild).toMatchSnapshot();
  expect(container.firstChild).toHaveStyleRule("justify-content", "center");
  expect(container.firstChild).toHaveStyleRule("flex-direction", "column");
});

test("InfoTab style test", () => {
  const { container } = render(<InfoTab />);
  expect(container.firstChild).toMatchSnapshot();
});

test("Container style test", () => {
  const { container } = render(<Container />);
  expect(container.firstChild).toMatchSnapshot();
});

test("HeartIcon default style test", () => {
  const { container } = render(<HeartIcon />);
  expect(container.firstChild).toMatchSnapshot();
  expect(container.firstChild).toHaveStyleRule("color", "gray");
});
