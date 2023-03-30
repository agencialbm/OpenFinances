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

`;

