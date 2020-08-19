import React from 'react'
import ProductCard from './ProductCard'

import { CardContainer , PageTitle , NotFoundText } from './ProductCardList.style'

export default function ProductCardList({ productData, onLiked }) {

  const productCardRenderer = () => {
    if(!productData.length) return <NotFoundText>There is nothing to show</NotFoundText>
    return productData.map(product => {
        return (<ProductCard key={product.id} onLiked={id => onLiked(id)} product={product}/>)
    })
  }

  return (
    <CardContainer>
      {productCardRenderer()}
    </CardContainer>
  )
}
