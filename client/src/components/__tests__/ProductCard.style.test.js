import React from "react";
import { render, cleanup } from "../../test.utils";

import {
  Card,
  Image,
  Title,
  Price,
  ProductInfo,
  CargoStatus,
  CardHeartIcon,
  CargoIcon
} from "../ProductCard.style";

afterEach(cleanup);

test("Card style test", () => {
  const { container } = render(<Card />);
  expect(container.firstChild).toMatchSnapshot();
  expect(container.firstChild).toHaveStyleRule("max-width", "250px");
  expect(container.firstChild).toHaveStyleRule("flex-direction", "column");
});

test("Image style test", () => {
  const { container } = render(<Image />);
  expect(container.firstChild).toMatchSnapshot();
  expect(container.firstChild).toHaveStyleRule("height", "200px");
  expect(container.firstChild).toHaveStyleRule("margin", "0 auto");
});

test("Title style test", () => {
  const { container } = render(<Title />);
  expect(container.firstChild).toMatchSnapshot();
});

test("Price style test", () => {
  const { container } = render(<Price />);
  expect(container.firstChild).toMatchSnapshot();
});

test("ProductInfo style test", () => {
  const { container } = render(<ProductInfo />);
  expect(container.firstChild).toMatchSnapshot();
});

test("CargoStatus style test", () => {
  const { container } = render(<CargoStatus />);
  expect(container.firstChild).toMatchSnapshot();
});

test("CardHeartIcon style test", () => {
  const { container } = render(<CardHeartIcon liked={null} />);
  expect(container.firstChild).toMatchSnapshot();
  expect(container.firstChild).toHaveStyleRule("color", "gray");
});

test("CargoIcon style test", () => {
  const { container } = render(<CargoIcon />);
  expect(container.firstChild).toMatchSnapshot();
});
