import styled from 'styled-components';


export const Form = styled.form`

@media (max-width:680px){
  width: 100%;
}
`;
export const InputCustom = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;

  > label {
    font-weight: 400;
    font-size: 13px;
    line-height: 16px;
    text-transform: uppercase;
    color: #FFFFFF;
  }

  > input {
    width: 100%;
    height: 41px;
    background: #FFFFFF;
    width: 100%;
    max-width: 58.3rem;
    margin-bottom: 1.4rem;
    color: black;
    padding-left: 10px;

  }

  @media (max-width: 998px){
  >label{
  font-size: 10px;
  }
    >input{

  max-width: 30.3rem;
}
  }

  @media (max-width: 680px){
    >label{
  font-size: 13px;
  }
    >input{

      max-width: 50.3rem;
  }
  }

`;

export const Title = styled.h1`

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

  @media (max-width: 998px) {
    >h2{
      font-size: 35px;
    }

    >p{
      font-size: 12px;

    }
  }

  @media (max-width: 680px) {
    display: none;
    >h2{
      font-size: 25px;
      line-height: 30px;
    }

    >p{
      font-size: 15px;
      line-height: 18px;

    }
  }



`;

export const SelectCustom = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;


  > label {
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 160%;
    color: #4a4a4a;
  }

  > select {
    border-bottom: 0.1rem solid #9f9f9f;
    width: 100%;
    max-width: 58.3rem;
    margin-bottom: 1.4rem;
    outline: none;
    background-color: transparent;
  }
`;



export const CheckCustom = styled.div`
  display: flex;
  gap: 1.2rem;
  text-align: center;
  align-items: center;
  margin-bottom: 2rem;

  > label {
    font-size: 1.5rem;
    line-height: 160%;
    line-height: 160%;
  }

  @media (max-width: 998px) {
   >label{
    font-size: 1.2rem;
   }
  }
`;

export const ButtonCustom = styled.button`
 background-color: ${({theme}) => theme.YELLOW};
  backdrop-filter: blur(4rem);
  border-radius: 0.4rem;


  width: 21.76rem;
  height: 5.1rem;

  font-weight: 500;
  font-size: 1.6rem;
  line-height: 1.9rem;
  color: #FFFFFF;

  &[disabled] {
    background-color: #ced4da;
    color: #6c757d;
    cursor: not-allowed;
    opacity: 0.7;
  }


`;
