import styled from 'styled-components';


export const ContainerFooter = styled.div`

padding: 80px 121px;

background-color: ${({theme}) => theme.GRAY_100};


.logo{
  width: 152px;
  height: 114px;

  >img{
    width: 100%;
    object-fit: cover;
  }
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
        a{
          font-style: normal;
          font-weight: 400;
          font-size: 14px;
          line-height: 25px;
          color: ${({theme}) => theme.WHITE};
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
    }
  }

`;
