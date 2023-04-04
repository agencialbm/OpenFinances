import React, { useState, useEffect } from 'react';
import { Icon } from '../Icon';
import { ScrollToTopButtonStyled } from './styled';


import Aos from 'aos';
import 'aos/dist/aos.css';

function WhatsAPP() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 80) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    Aos.init();
  }, []);

  // const scrollToTop = () => {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: 'smooth'
  //   });
  // };

  window.addEventListener('scroll', toggleVisibility);

  return (
    <ScrollToTopButtonStyled isVisible>
      <div className="scroll-to-top">
        {isVisible && (
          <a
            href="https://api.whatsapp.com/send?phone=5511959668538&text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es."
            target='_blank' rel="noreferrer"

          >
            <Icon data-aos="zoom-in-up" name="iconWhatsapp" size={50} />
          </a>
        )}
      </div>
    </ScrollToTopButtonStyled>
  );
}

export default WhatsAPP;
