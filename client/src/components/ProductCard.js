import React, { useContext, useState } from 'react'

import {LikeFnContext} from '../pages/ProductsPage'
import { cargoStatusesMappingObject } from '../constants'

import {
  Card,
  Image,
  Title,
  Price,
  ProductInfo,
  CargoStatus,
  CardHeartIcon,
  CargoIcon
} from './ProductCard.style';

export default function ProductCard({product}) {
  const [liked,setLiked] = useState(false);
  const onLikedFn = useContext(LikeFnContext);

  const showCargoIcon = product.cargoStatus !==  'PAID_SHIPPING';
  const cargoText = cargoStatusesMappingObject[product.cargoStatus]

  const onLiked = id => {
    setLiked(!liked);
    onLikedFn(id);
  }

  return (
    <Card>
      <Image src={product.image}/>
      <CardHeartIcon liked={liked} onClick={() => onLiked(product.id)}/>
      <ProductInfo>
        <Title>{product.title}</Title>
        <Price>{`${product.price} TL`}</Price>
        <CargoStatus>{showCargoIcon && <CargoIcon/>}{cargoText}</CargoStatus>
      </ProductInfo>
    </Card>
  )
}