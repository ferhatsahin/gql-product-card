import styled from "styled-components";
import { Link } from "@reach/router";

import { HeartIcon } from "../pages/ProductPage.style";
import { ReactComponent as Cargo } from "../assests/icons/cargo.svg";

export const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 10px;
  padding: 10px;
  max-width: 250px;
  border-radius: 5px;
  position: relative;
  border: 1px solid #efefef;
`;

export const Price = styled.div`
  width: 100%;
  background: lightgray;
  padding: 5px;
  font-weight: bold;
`;

export const Title = styled.p`
  font-size: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const ProductInfo = styled.div`
  padding: 2px 16px;
`;

export const Image = styled.img`
  height: 200px;
  margin: 0 auto;
`;

export const CargoStatus = styled.p`
  padding: 5px;
  font-size: 14px;
`;

export const CargoIcon = styled(Cargo)`
  width: 14px;
  color: green;
  padding-right: 5px;
`;

export const CardHeartIcon = styled(HeartIcon)`
  width: 15px;
  padding: 5px;
  position: absolute;
  right: 15px;
  border: none;
  background: lightgray;
  border-radius: 50%;
  &:hover {
    cursor: pointer;
  }
`;
