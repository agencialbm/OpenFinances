import { Content } from './../../pages/Home/styled';
import styled from 'styled-components';


export const ContainerText = styled.div`
  width: 100%;
  max-width: 330px;
  background-color: transparent;
  text-align: center;


  >h2{

    font-style: normal;
    font-weight: 700;
    font-size: 25px;
    line-height: 38px;
    color: ${({ theme }) => theme.WHITE};
    margin-bottom: 38px;
  }

  >p{
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    text-align: center;
    color: ${({ theme }) => theme.WHITE};

  }

@media(max-width: 1400px){
  max-width: 230px;
  height: 150px;
  >h2{
    font-size: 20px;
    margin-bottom: 28px;


  }
  p{
    font-size: 12px;
  }
}

@media(max-width: 680px){
  max-width: 290px;

  >h2{

    font-size: 25px;
    line-height: 38px;


  }
  p{
    font-size: 12px;
    line-height: 21px;
  }

}

`;

