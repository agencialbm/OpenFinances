import styled from 'styled-components'

export const Overlay = styled.div`
  width: 100%;
  height: 100%;

  position: fixed;
  left: 0rem;
  top: 0rem;

  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(0.2813rem);

  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 5
`

export const ContainerModal = styled.div`
  background: #ffffff;
  width: 30rem;
  border-radius: 0.5rem;
  padding: 2rem;
  position: relative;


  > button {
    line-height: 0;
    border: 0;
    background: transparent;


    position: absolute;
    top: 8px;
    right: 8px;
  }

`;



export const MenuModal = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 4rem 0;

  li {

      > a {

        >button{

        background-color: transparent;
        color: ${({ theme }) => theme.BLACK};
        font-weight: 500;
        font-size: 1.4rem;
        line-height: 2.1rem;

        &:after {
          content: '';
          width: 0%;
          height: 1px;
          position: absolute;
          left: 0;
          bottom: 0rem;
          background-color: ${({ theme }) => theme.GRAY_100};
          transition: width 0.3s;
        }

        &:hover::after {
          width: 100%;
        }
      }
    }

    }

`
