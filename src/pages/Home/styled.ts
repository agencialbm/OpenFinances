import styled from 'styled-components';



export const SectionHeader = styled.div`

  background-color: black;
  width: 100%;
  max-width: 1920px;
  padding: 35px 25px 0 93px;





`;

export const Content = styled.div`

 display: flex;
 align-items: center;
 justify-content: space-between;

 .texto01{
  max-width: 370px;

  h2{
    font-weight: 500;
    font-size: 25px;
    line-height: 45px;
    color: #FFFFFF;
  }
 }

 .imgfundo{

  max-width: 700px;

 }

`;

export const ContentTexto = styled.div`

 background-color: ${({theme}) => theme.GRAY_100};
 padding: 54px 91px 68px 24px;
 display: flex;
 align-items: center;
 justify-content: space-between;
 width: 100%;
 max-width: 1920px;
position: relative;
 bottom: -141px;




 border-radius: 10px;


`;

