import React, { useState, createContext } from 'react'
import { useQuery, gql } from '@apollo/client'
import styled from 'styled-components'

import ProductCardList from '../components/ProductCardList'


import { PageContainer, InfoTab, Container, HeartIcon } from './ProductPage.style';

const PRODUCTS_QUERY = gql`
  query {
    products{
      id
      title
      image
      price
      cargoStatus
    }
  }
`;

export const LikeFnContext = createContext();

export default function ProductsPage() {

  const [isFavorite,setIsFavorite] = useState(false);
  const [likedIdList, setLikedIdList] = useState([]);

  const onLiked = id => {
    if(!likedIdList.includes(id)){
      setLikedIdList([...likedIdList,id]);
    }
    else{
      setLikedIdList(likedIdList.filter(itemId => itemId !== id));
    }
  }

  const { data } = useQuery(PRODUCTS_QUERY);
  if(!data) return null;

  const { products } = data;
  const likedDataList = products.filter(item => likedIdList.includes(item.id))

  return (
    <PageContainer>
      <Container>
        <InfoTab>
          <HeartIcon liked/>
          {likedIdList.length} Ürün 
        </InfoTab>
        <InfoTab onClick={() => setIsFavorite(!isFavorite)}> Beğendiklerim </InfoTab>
      </Container>
      <LikeFnContext.Provider value={onLiked}>
        <ProductCardList productData={isFavorite ? likedDataList : products}/>
      </LikeFnContext.Provider>
    </PageContainer>
  )
}