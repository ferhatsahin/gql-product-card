import styled from 'styled-components';
import { ReactComponent as Heart } from '../assests/icons/heart.svg'

export const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 7%;
  background: slategray;
`

export const InfoTab = styled.div`
  display: flex;
  align-items: center;
  background: white;
  padding: 20px;
  -webkit-box-shadow: 9px 10px 18px -12px rgba(0,0,0,0.69);
  -moz-box-shadow: 9px 10px 18px -12px rgba(0,0,0,0.69);
  box-shadow: 9px 10px 18px -12px rgba(0,0,0,0.69);
  font-size: 25px;
  margin-right: 25px;
  margin-top: 10px;
`

export const Container = styled.div`
  display: flex;
  @media only screen and (max-width: 600px) {
    flex-direction: column
  }
`

export const HeartIcon = styled(Heart)`
  width: 30px;
  color: ${props => props.liked ? 'red' : 'gray'};
  padding-right: 10px;
`