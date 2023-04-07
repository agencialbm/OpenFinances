import styled from 'styled-components';


export const ContainerHeader = styled.div`

display: flex;
justify-content: space-between;
align-items: center;


.logoHeader{
  display: flex;

}

>ul{
  display: flex;
  width: 100%;
  max-width: 721px;
  justify-content: space-around;

  li{
    a{
      font-weight: 500;
      font-size: 20px;
      line-height: 38px;
      color: white;
    }
  }

}

.menuMobile{
  display: none;
  cursor: pointer;
}

@media (max-width: 1600px) {
    .logoHeader{
      Width: 128px;
      Height: 95.6px;
    }

  > ul{
      max-width: 620px;
      li {
        a {
          font-size: 16px;
        }
      }
    }
  }

  @media (max-width: 680px){
    ul{
      display: none;
    }
    >.menuMobile{
      display: block;
    }
  }
`;
