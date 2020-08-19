import React from 'react'

import {
  Card,
  Image,
  Title,
  Price,
  Button,
  ProductInfo,
  CargoStatus
} from './ProductCard.style';

export default function ProductCard({product, onLiked}) {
  const cargoIcon = product.cargoStatus !==  'PAID_SHIPPING' ? "" : 'I-'

  return (
    <Card>
      <Image src={product.image}/>
      <Button onClick={() => onLiked(product.id)} >Like</Button>
      <ProductInfo>
        <Title>{product.title}</Title>
        <Price>{product.price}</Price>
        <CargoStatus>{cargoIcon}{product.cargoStatus}</CargoStatus>
      </ProductInfo>
    </Card>
  )
}