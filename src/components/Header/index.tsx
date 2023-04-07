import { ContainerHeader } from './styled';

import logoheader from '../../assets/logoHeader.png';
import { Icon } from '../Icon';


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
      <div className="menuMobile">
        <Icon name='iconMobile' size={25}/>
      </div>
    </ContainerHeader>
  );

}



