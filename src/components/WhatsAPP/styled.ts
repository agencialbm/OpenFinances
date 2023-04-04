import styled from 'styled-components';

type ButtonProps = {
  isVisible: boolean;
};

export const ScrollToTopButtonStyled = styled.button<ButtonProps>`

  display: ${(props) => (props.isVisible ? 'block' : 'none')};
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 99;
  border: none;
  background: transparent;
  color: white;
  cursor: pointer;
  transition: opacity 0.3s;

  /* button{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #4B79C9;
    display: flex;
    align-items: center;
    justify-content: center;

    transform: rotate(180deg);
  } */
`;


