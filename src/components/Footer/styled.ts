import styled from 'styled-components';


export const ContainerFooter = styled.div`

padding: 80px 121px;
width: 100%;
background-color: ${({theme}) => theme.GRAY_100};

`;

export const LogoFooter = styled.div`
 width: 152px;
  height: 114px;

  >img{
    width: 100%;
    object-fit: cover;
  }
`;



export const FooterTop = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 115px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.7);
  .acesso, .contato{

    >ul{
      display: flex;
      flex-direction: column;
      gap: 12px;

      li{
        color: ${({theme}) => theme.WHITE};
        display: flex;
        align-items: center;
        gap: 12px;
        a{
          font-style: normal;
          font-weight: 400;
          font-size: 14px;
          line-height: 25px;
          color: ${({theme}) => theme.WHITE};
          transition: all .2s;


          &:hover{
            color: rgba(255, 255, 255, 0.9)
          }
        }
      }
    }
    >h2{
      margin-bottom: 35px;
      max-width: 148px;
      font-weight: 400;
      font-size: 20px;
      line-height: 35px;
      color: ${({theme}) => theme.WHITE};
      position: relative;


      &:after {
        content: '';
        width: 49px;
        height: 2px;
        background-color: ${({theme}) => theme.WHITE};
        bottom: -10px;
        left: 0;
        position: absolute;
        transition: width 0.3s;


      }
      &:hover::after {
          width: 100%;
        }

    }
  }

  .contato{
    >h2{
      width:85px;
    }
  }

`;

export const FooterDown = styled.div`

  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  >p{
    font-weight: 400;
    font-size: 15px;
    line-height: 35px;
    color: ${({theme}) => theme.WHITE};
    a{
    font-weight: 400;
    font-size: 15px;
    line-height: 35px;
    color: ${({theme}) => theme.YELLOW};
    }
  }

  .createLMB{
    display: flex;
    align-items: center;
    gap: 10px;

    >p{
      font-weight: 400;
      font-size: 15px;
      line-height: 45px;
      color: ${({theme}) => theme.WHITE};
    }
  }

  .social{
    ul{
      display: flex;
      gap: 8px;

      a{
        width: 42px;
        height: 42px;
        border-radius: 50%;
        background-color: #5F5F5F;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }

`;
