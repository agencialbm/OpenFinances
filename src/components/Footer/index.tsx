import { ContainerFooter, FooterDown, FooterTop } from './styled';

import logofooter from '../../assets/logoFooter.png';
import { Icon } from '../Icon';
export function Footer() {
  return (
    <ContainerFooter>
      <FooterTop>
        <div className="logo">
          <img src={logofooter} alt="" />
        </div>
        <div className="acesso">
          <h2>Acesso Rápido</h2>
          <ul>
            <li>
              <a href="">Sobre Nós</a>
            </li>
            <li>
              <a href="">Soluções</a>
            </li>
            <li>
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
        <p>Open Finances © 2022 - Todos os direitos reservados | <a href="" target="_blank" rel="noreferrer">
          Política de privacidade
        </a> </p>
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
      </FooterDown>
    </ContainerFooter>
  );
}
