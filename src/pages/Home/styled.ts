import styled from 'styled-components';

interface Prop {
  isActive: boolean;
}

export const SectionHeader = styled.div`

  background-color: black;
  width: 100%;
  padding: 35px 25px 0 148px;

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
 max-width: 1623px;
 position: relative;
 bottom: -141px;




 border-radius: 10px;


`;

export const SectionMain = styled.div`

width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 206px 0 175px 0;

>h2{

  margin-bottom: 108px;
  font-style: normal;
  font-weight: 400;
  font-size: 35px;
  line-height: 43px;
  text-align: center;
  max-width: 618px;
}


`;

export const SectionForm = styled.div`
background: black;
width: 100%;
padding: 90px 0;


`;

export const Formulario = styled.div<Prop>`

background: black;
width: 100%;
max-width: 1000px;
display: flex;
justify-content: space-between;
margin: 0 auto;

>.button{
  display: flex;
  flex-direction: column;
  gap: 90px;

  >button{

      font-weight: 600;
      font-size: 22px;
      line-height: 27px;
      position: relative;
      background: transparent;

      &:after{
      content: '';
      width: 6px;
      height: 42px;
      position: absolute;
      background: #FFFFFF;
      border-radius: 3px;
      left: 46px;

    }

    { isActive === true ?  : ''}
    &.isActive{
      background: #FFFFFF;
      width: 361px;
      height: 102px;
      box-shadow: 0px 0px 15px #FFFFFF;
      border-radius: 10px;
      color: black;

      :after {
        width: 0;
      }
    }

    &.isDisabled{
      background: transparent;


      &:after{
      content: '';
      width: 6px;
      height: 42px;
      position: absolute;
      background: #FFFFFF;
      border-radius: 3px;
      left: 46px;

    }
    }

  }
}


`;

