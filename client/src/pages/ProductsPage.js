import React, { useState, useEffect } from 'react'

import ProductCardList from '../components/ProductCardList'
import data from '../data'

import { PageContainer, InfoTab, Container } from './ProductPage.style';

export default function ProductsPage() {

  const [isFavorite,setIsFavorite] = useState(false);
  const [likedIdList, setLikedIdList] = useState([]);

  const onLiked = id => {
    if(!likedIdList.includes(id)){
      setLikedIdList([...likedIdList,id])
    }
  }

  const likedDataList = data.filter(item => likedIdList.indexOf(item.id) > -1 )

  return (
    <PageContainer>
      <Container>
        <InfoTab>{likedIdList.length} Ürün </InfoTab>
        <InfoTab onClick={() => setIsFavorite(!isFavorite)}> Beğendiklerim </InfoTab>
      </Container>
      <ProductCardList onLiked={onLiked} productData={isFavorite ? likedDataList : data}/>
    </PageContainer>
  )
}