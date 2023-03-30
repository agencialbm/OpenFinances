import { ContainerHeader } from './styled';

import logoheader from '../../assets/logoHeader.png';


export function Header(){

  return (
    <ContainerHeader>
      <div className="logoHeader">
        <img src={logoheader} alt="" />
      </div>
      <ul>
        <li><a href="">SOBRE</a></li>
        <li><a href="">SOLUÇÕES</a></li>
        <li><a href="">FALE CONOSCO</a></li>
      </ul>
    </ContainerHeader>
  );

}



