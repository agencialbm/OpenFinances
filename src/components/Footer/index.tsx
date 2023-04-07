import { ContainerFooter, FooterDown, FooterTop, LogoFooter } from './styled';

import logofooter from '../../assets/logoFooter.png';
import { Icon } from '../Icon';
export function Footer() {
  return (
    <ContainerFooter>
      <FooterTop>
        <LogoFooter>
          <img src={logofooter} alt="" />
        </LogoFooter>

        <div className="acesso">
          <h2>Acesso Rápido</h2>
          <ul>
            <li>
             <Icon name='iconArrow' size={12}/>
              <a href="">Sobre Nós</a>
            </li>
            <li>
            <Icon name='iconArrow' size={12}/>
              <a href="">Soluções</a>
            </li>
            <li>
            <Icon name='iconArrow' size={12}/>
              <a href="">Contato</a>
            </li>
          </ul>
        </div>

        <div className="contato">
          <h2>Contato</h2>
          <ul>
            <li>contato@openfinances.com.br</li>
            <li>+55 11 95966-8538</li>
          </ul>
        </div>
      </FooterTop>
      <FooterDown>
        <p>Open Finances © 2022 - Todos os direitos reservados | <a href="https://drive.google.com/file/d/11mliZoxv58yTZ2y1VvHHoG6FyW6LDjqW/view?usp=drivesdk" target="_blank" rel="noreferrer">
          Política de privacidade
        </a> </p>
        <div className='container'>

          <div className="createLMB">
            <p>Created with much love by:</p>
            <Icon name='iconLBM' size={45}/>

          </div>

          <div className="social">
            <ul>
              <li>
                <a href="">
                  <Icon  name="iconLinkedln" size={20} />
                </a>
              </li>
              <li>
                <a href="">
                  <Icon name="iconFacebook" size={20} />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/agencialbm/">
                  <Icon name="iconInstagram" size={20} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </FooterDown>
    </ContainerFooter>
  );
}
