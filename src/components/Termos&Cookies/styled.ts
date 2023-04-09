import { Content } from './../../pages/Home/styled';
import styled from 'styled-components';

export const ContainerTermos = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 46px 120px;
  position: fixed;
  bottom: 0;
  background-color: ${({theme}) => theme.GRAY_100};
  z-index: 1000;
  box-shadow: 0px 0px 15px #4A4A4A;
  border-radius: 10px;


  > p{
    font-weight: 400;
    font-size: 18px;
    line-height: 160.69%;
    color: white;
    max-width: 900px;



    >a{
      font-size: 18px;
      margin-left: 5px;
      margin-right: 5px;
      text-decoration: underline;
      color: YELLOW;
    }



  }

  >button{
      border-radius: 10px;
      padding: 14px 34px;
      background-color: ${({theme}) => theme.YELLOW};
      color: ${({theme}) => theme.BLACK};
  }


 @media (max-width: 1500px){
  padding: 35px 45px;
}

@media (max-width: 998px){
  padding: 35px 44px;

  >p{
    font-size: 14px;
    text-align: center;
    max-width: 600px;

    a{
      font-size: 14px;
    }
  }

  >button{

      padding: 10px 25px;

  }


}

@media (max-width: 680px){
  display: flex;
  flex-direction: column;

  >p{
    font-size: 12px;
    margin-bottom: 20px;
  }

  >button{
    padding: 14px 64px;
  }
}
`;
