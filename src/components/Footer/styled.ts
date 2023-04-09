import styled from 'styled-components';


export const ContainerFooter = styled.div`

padding: 80px 121px;
width: 100%;
background-color: ${({theme}) => theme.GRAY_100};

@media (max-width: 1400px) {
  padding: 60px 44px;
}
@media (max-width: 998px){
 box-sizing: content-box;

}

@media (max-width: 680px){
  box-sizing: border-box;
  padding: 47px 45px 16px 45px;
}

`;

export const LogoFooter = styled.div`
 width: 152px;
  height: 114px;

  >img{
    width: 100%;
    object-fit: cover;
  }

  @media (max-width: 680px){
    margin-bottom: 60px;
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

  @media (max-width: 1400px) {
    padding-bottom: 60px;

    .acesso, .contato{
      >ul{
        li{
          font-size: 12px;
          a{
            font-size: 12px;
          }
        }
      }
    }
}

@media (max-width: 680px){
  flex-direction: column;

  .contato{
    margin-top: 38px;


  }

  .contato, .acesso{
    >h2{
      margin-bottom: 45px;
    }
  }
}

`;

export const FooterDown = styled.div`

  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  >.container{
    display: flex;
    gap: 250px;
  }

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
        transition: all 0.3s;

        &:hover{
          transform: translateY(-15px);
        }


      }
    }
  }
  @media (max-width: 1600px){
    >.container{
      gap: 50px;
    }
  }

  @media (max-width: 1400px) {
    margin-top: 60px;

    >p{
      font-size: 12px;
    }
    .createLMB{
      >p{
        font-size: 12px;
        line-height: 35px;
      }
    }
    .social{
      >ul{

        gap: 5px;
        a{
          width: 38px;
          height: 38px;
        }
      }
    }
  }

  @media (max-width: 998px){
    flex-direction: column;
    >.container{
      flex-direction: column-reverse;
      gap: 0;
      align-items: center;
      margin: 15px 0;
    }
}

@media (max-width: 680px){

  flex-direction: column;
  align-items: flex-start;


  >p{
    max-width: 378px;
  }
  .container{
    gap: 60px;
    align-items: flex-start;

  }
}

`;
