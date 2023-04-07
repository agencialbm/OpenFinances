import styled from 'styled-components';

interface Prop {
  isActive: boolean;
}

export const SectionHeader = styled.div`

  background-color: black;
  width: 100%;

  padding: 35px 25px 0 148px;


  @media (max-width: 1600px){
    padding: 35px 25px 0 121px;
  }

  @media (max-width: 1400px){

  padding: 35px 44px 0 44px;


 }

 @media (max-width: 998px){
  box-sizing: content-box;

 }

 @media (max-width: 680px){

  box-sizing: border-box;
 }


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

 @media (max-width: 680px) {
  flex-direction: column;
  align-items: start;

  .texto01{
    width:264px;
    >h2{
      font-size: 18px;
      line-height: 27px;
      margin-top: 107px;

    }
  }
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

 @media (max-width: 1600px){
  max-width: 1200px;
  padding: 54px 51px 68px 24px;
 }
 @media (max-width: 1400px){
  max-width: 1200px;

 }

 @media (max-width: 998px){

  padding: 54px 20px 68px 20px;
 }

 @media (max-width: 680px){
  flex-direction: column;
  padding: 57px 40px 85px 40px;
  bottom: 0;
  gap: 80px;
  text-align: center;
 }






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
  color: #000000;
}

@media (max-width: 998px){
  align-items: start;
  padding: 220px 0 120px 0;
  box-sizing: content-box;

  >h2{
   margin-left: 110px;

  }
}

@media (max-width: 680px){
  padding: 57px 48px 81px 48px;
  align-items: center;
  box-sizing: border-box;

  >h2{
    font-size: 18px;
    line-height: 22px;
    margin-left: 0px;
  }
}



`;

export const SectionForm = styled.div`
background: black;
width: 100%;

padding: 90px 0;

@media (max-width: 1400px){
  padding: 90px 44px;
}
@media (max-width: 998px){
 box-sizing: content-box;


}

@media (max-width: 680px){
  padding: 73px 45px 68px 45px;
  box-sizing: border-box;
}
`;

export const Formulario = styled.div`

background: black;
width: 100%;
max-width: 1000px;
display: flex;
justify-content: space-between;
margin: 0 auto;

@media (max-width: 680px){
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;

}

`;

export const TitleMobile = styled.h1`
display: none;
  >h2{

    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    line-height: 49px;
    font-family: 'Montserrat';
  }

  > p{

    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    font-family: 'Montserrat';
    margin-bottom: 55px;
    margin-top: 5px;
  }

  @media (max-width: 680px){
    display: block;
    >p{
      margin-bottom: 51px;
    }
  }
  `;

export const ContainerButton = styled.div`
  display: flex;
  flex-direction: column;
  gap: 90px;
  margin-top: 140px;


@media (max-width: 680px){
  margin-top: 0px;
  gap: 0px;

}
`;

export const ButtonOne = styled.button<Prop>`
      font-weight: 600;
      font-size: 22px;
      line-height: 27px;
      position: relative;
      width: 361px;
      height: 102px;
      color: ${props => (props.isActive ? 'black' : '#ffff')};
      background:  ${props => (props.isActive ? '#ffff' : 'transparent')};
      border-radius: ${props => (props.isActive ? '10px' : '')};
      box-shadow:  ${props => (props.isActive ? '0px 0px 15px #FFFFFF' : '')};


      &:after{
      content: '';
      width:   ${props => (props.isActive ? '' : '6px')};
      height: ${props => (props.isActive ? '' : '42px')};
      position: ${props => (props.isActive ? '' : 'absolute')};
      background: ${props => (props.isActive ? '' : '#ffffff')};
      border-radius: ${props => (props.isActive ? '' : '3px')};
      left: ${props => (props.isActive ? '' : '46px')};;
    }

    @media (max-width: 998px) {
      font-size: 18px;
      width: 300px;
      height: 102px;
      &:after {
        height: ${props => (props.isActive ? '' : '32px')};
      }
  }
`;

export const ButtonTue = styled.button<Prop>`
      font-weight: 600;
      font-size: 22px;
      line-height: 27px;
      position: relative;
      width: 361px;
      height: 102px;
      color: ${props => (props.isActive ? '#ffff' : 'black')};
      background:  ${props => (props.isActive ? 'transparent' : '#ffff')};
      border-radius: ${props => (props.isActive ? '' : '10px')};
      box-shadow:  ${props => (props.isActive ? '' : '0px 0px 15px #FFFFFF')};


      &:after{
      content: '';
      width:   ${props => (props.isActive ? '6px' : '')};
      height: ${props => (props.isActive ? '42px' : '')};
      position: ${props => (props.isActive ? 'absolute' : '')};
      background: ${props => (props.isActive ? '#ffffff' : '')};
      border-radius: ${props => (props.isActive ? '3px' : '')};
      left: ${props => (props.isActive ? '46px' : '')};;
    }
    @media (max-width: 998px) {
      font-size: 18px;
      width: 300px;
      &:after {
        height: ${props => (props.isActive ? '32px' : '')};
      }

  }

  @media (max-width: 680px) {
margin-bottom: 50px;
  }
`;




