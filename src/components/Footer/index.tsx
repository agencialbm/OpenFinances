import { ContainerFooter, FooterDown, FooterTop, LogoFooter } from './styled';

import logofooter from '../../assets/logoFooter.png';
import { Icon } from '../Icon';
export function Footer() {
  return (
    <ContainerFooter >
      <FooterTop>
        <LogoFooter>
          <img src={logofooter} alt="" />
        </LogoFooter>

        <div className="acesso" data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              data-aos-duration="1000">
          <h2>Acesso Rápido</h2>
          <ul>
            <li>
             <Icon name='iconArrow' size={12}/>
              <a href="#sobre">Sobre Nós</a>
            </li>
            <li>
            <Icon name='iconArrow' size={12}/>
              <a href="#solucoes">Soluções</a>
            </li>
            <li>
            <Icon name='iconArrow' size={12}/>
              <a href="#faleconosco">Contato</a>
            </li>
          </ul>
        </div>

        <div className="contato" data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              data-aos-duration="800">
          <h2>Contato</h2>
          <ul>
            <li>contato@openfinances.com.br</li>
            <li>+55 11 95966-8538</li>
          </ul>
        </div>
      </FooterTop>
      <FooterDown >
        <p >Open Finances © 2022 - Todos os direitos reservados | <a href="https://drive.google.com/file/d/11mliZoxv58yTZ2y1VvHHoG6FyW6LDjqW/view?usp=drivesdk" target="_blank" rel="noreferrer">
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
                <a href="/">
                  <Icon  name="iconLinkedln" size={20} />
                </a>
              </li>
              <li>
                <a href="/">
                  <Icon name="iconFacebook" size={20} />
                </a>
              </li>
              <li>
                <a href="/">
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
