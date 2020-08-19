import styled from 'styled-components';

export const Card = styled.div`
  width: 100%;
  margin: 10px;
  padding: 20px;
  display: flex;
  max-width: 250px; 
  border-radius:5px;
  position: relative;
  flex-direction: column;
  border: 1px solid #efefef;
  justify-content: flex-start;
`
export const Price = styled.div`
  width:100%;
  background: lightgray;
  padding: 5px;
`

export const Title = styled.p`
  font-size: 20px;
`

export const ProductInfo = styled.div`
  padding: 2px 16px;
`

export const Image = styled.img`
  height: 200px;
  margin: 0 auto;
`

export const CargoStatus = styled.p`
  font-size:13px;
`

export const Button = styled.button`
  right: 0;
  position: absolute;
  padding: 10px;
  margin-left: 15px;
  background: pink;
  border: none;
  &:hover {
    cursor:pointer;
  }
`