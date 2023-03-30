import { ReactNode } from 'react';
import { ContainerButton } from './styled';

interface IButton {
  children: ReactNode
  title: string
}

export function Button({children, title}: IButton){
  return(
    <ContainerButton data-testid="button">
      {children}
      <p>{title}</p>
    </ContainerButton>
  );
}
