import React from 'react'
import ProductCard from './ProductCard'

import { CardContainer , PageTitle , NotFoundText } from './ProductCardList.style'

export default function ProductCardList({ productData }) {

  const productCardRenderer = () => {
    if(!productData.length) return <NotFoundText>There is nothing to show</NotFoundText>
    
    return productData.map(product => {
        return (<ProductCard key={product.id} product={product}/>)
    })
  }

  return (
    <CardContainer>
      {productCardRenderer()}
    </CardContainer>
  )
}
