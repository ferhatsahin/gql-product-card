import React, { useContext, useState } from "react";
import { Link } from "@reach/router";

import { LikeFnContext } from "../pages/ProductsPage";
import { cargoStatusesMappingObject } from "../constants";

import {
  Card,
  Image,
  Title,
  Price,
  ProductInfo,
  CargoStatus,
  CardHeartIcon,
  CargoIcon,
  StyledLink
} from "./ProductCard.style";

export default function ProductCard({ product }) {
  const [liked, setLiked] = useState(null);
  const onLikedFn = useContext(LikeFnContext);

  const showCargoIcon = product.cargoStatus !== "PAID_SHIPPING";
  const cargoText = cargoStatusesMappingObject[product.cargoStatus];

  const onLiked = id => {
    setLiked(!liked);
    onLikedFn(id);
  };
  return (
  
    <Card>
        <Image src={product.image} />
      <CardHeartIcon liked={liked} onClick={() => onLiked(product.id)} />
      <StyledLink to="/redirected-page">
        <ProductInfo>
          <Title>{product.title}</Title>
          <Price>{`${product.price} TL`}</Price>
          <CargoStatus>
            {showCargoIcon && <CargoIcon />}
            {cargoText}
          </CargoStatus>
        </ProductInfo>
      </StyledLink>
    </Card>
  );
}
