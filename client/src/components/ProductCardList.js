import React from "react";
import styled from "styled-components";

import ProductCard from "./ProductCard";

import {
  CardContainer,
  PageTitle,
  NotFoundText
} from "./ProductCardList.style";

export default function ProductCardList({ productData }) {
  const productCardRenderer = () => {
    if (!productData.length)
      return <NotFoundText>There is nothing to show</NotFoundText>;

    return productData.map(product => {
      return <ProductCard key={product.id} product={product} />;
    });
  };

  return (
    <CardWrapper>
      <PageTitle>İlginizi Çekebilecek Ürünler</PageTitle>
      <CardContainer>
        {productCardRenderer()}
      </CardContainer>
    </CardWrapper>
  );
}

const CardWrapper = styled.div`
  margin-top: 5%;
  padding: 20px;
  background: white;
  font-size: 19px;
`
