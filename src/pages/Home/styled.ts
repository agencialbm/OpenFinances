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

export const Formulario = styled.div`

background: black;
width: 100%;
max-width: 1000px;
display: flex;
justify-content: space-between;
margin: 0 auto;

`;

export const ContainerButton = styled.div`
  display: flex;
  flex-direction: column;
  gap: 90px;

`

export const ButtonOne = styled.button<Prop>`
      font-weight: 600;
      font-size: 22px;
      line-height: 27px;
      position: relative;
      color: ${props => (props.isActive ? 'black' : '#ffff')};
      background:  ${props => (props.isActive ? '#ffff' : 'transparent')};

      &:after{
      content: '';
      width:   ${props => (props.isActive ? '' : '6px')};
      height: ${props => (props.isActive ? '' : '42px')};
      position: ${props => (props.isActive ? '' : 'absolute')};
      background: ${props => (props.isActive ? '' : '#ffffff')};
      border-radius: ${props => (props.isActive ? '' : '3px')};
      left: ${props => (props.isActive ? '' : '46px')};;
    }
`

export const ButtonTue = styled.button<Prop>`
      font-weight: 600;
      font-size: 22px;
      line-height: 27px;
      position: relative;
      color: ${props => (props.isActive ? '#ffff' : 'black')};
      background:  ${props => (props.isActive ? 'transparent' : '#ffff')};

      &:after{
      content: '';
      width:   ${props => (props.isActive ? '6px' : '')};
      height: ${props => (props.isActive ? '42px' : '')};
      position: ${props => (props.isActive ? 'absolute' : '')};
      background: ${props => (props.isActive ? '#ffffff' : '')};
      border-radius: ${props => (props.isActive ? '3px' : '')};
      left: ${props => (props.isActive ? '46px' : '')};;
    }
`




