import styled from 'styled-components';


export const ContainerMultCard = styled.div`

        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 86px 72px;


        @media (max-width: 1600px) {
          grid-gap: 60px 52px;
        }
        @media (max-width: 998px) {
          padding: 0 44px;
          grid-gap: 10px 10px;
        }

        @media (max-width: 680px){
          grid-template-columns: repeat(1, 1fr);
          gap: 56px;
          padding: 0;
          

        }





`;
