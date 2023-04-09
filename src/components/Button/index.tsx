import { ReactNode, useEffect } from 'react';
import { ContainerButton } from './styled';


interface IButton {
  children: ReactNode
  title: string
}

export function Button({children, title}: IButton){



  return(
    <ContainerButton data-testid="button" data-aos="zoom-in-up" >
      <div>{children}</div>

      <p>{title}</p>
    </ContainerButton>
  );
}
