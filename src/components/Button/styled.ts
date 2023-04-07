import styled from 'styled-components';

export const ContainerButton = styled.button`
  background-color: ${({ theme }) => theme.YELLOW};


  width: 286px;
  height: 123px;
  padding-left: 30px;
  display: flex;
  align-items: center;
  gap: 32px;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;


  >p{
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    font-family: 'Montserrat', sans-serif;
    text-align: left;
    color: ${({ theme }) => theme.BLACK};
  }

  @media (max-width: 1600px) {
    width: 276px;
    height: 115px;
    gap: 22px;
  }

  @media (max-width: 998px) {
    width: 250px;
    height: 115px;
    gap: 15px;
    padding-left: 15px;

    >p{
      font-size: 14px;
    }
  }

  @media (max-width: 680px){
    width: 286px;
    gap: 32px;
    padding-left: 30px;


    >p{
      font-size: 16px;
      line-height: 20px;
    }

  }



`;
