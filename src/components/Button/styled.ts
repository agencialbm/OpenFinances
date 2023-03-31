import styled from 'styled-components';

export const ContainerButton = styled.button`
  background-color: ${({ theme }) => theme.YELLOW};
  color: ${({ theme }) => theme.BLACK};

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
  }

`;
