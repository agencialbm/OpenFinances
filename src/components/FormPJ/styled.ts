import styled from 'styled-components';

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

export const TextAreaCustom = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;

  > label {
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 160%;

  }

  > textarea {
    width: 58.1rem;
    height: 15.6rem;
    border: 0.1rem solid #9f9f9f;
    border-radius: 0.4rem;
    resize: none;
    margin-bottom: 0.6rem;
    background-color: transparent;
  }
  @media (max-width: 1800px) {
    >textarea{

      max-width: 450px;
    }
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
    opacity: 0.7; // cor mais fraca
  }
`;
