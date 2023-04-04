import styled from 'styled-components';

export const ContainerTermos = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 46px 120px;
  position: fixed;
  bottom: 0;
  background-color: white;
  z-index: 1000;
  box-shadow: 0px 0px 15px #FFFFFF;


  > p{
    font-weight: 400;
    font-size: 18px;
    line-height: 160.69%;
    color: #4A4A4A;
    max-width: 900px;



    >a{
      font-size: 18px;
      margin-left: 5px;
      margin-right: 5px;
      text-decoration: underline;
      color: #4A4A4A;
    }



  }

  >button{
      border-radius: 10px;
      padding: 14px 34px;
      background-color: ${({theme}) => theme.YELLOW};
      color: ${({theme}) => theme.BLACK};
  }

`;
