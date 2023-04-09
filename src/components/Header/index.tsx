import { ContainerHeader } from './styled';
import { ModalContext } from '@/context/example';

import logoheader from '../../assets/logoHeader.png';
import { Icon } from '../Icon';
import { useContext } from 'react';
import { Modal } from '../Modal';


export function Header(){


  const { openModal, modalVisible, closeModal } = useContext(ModalContext)

  function handleOpenModal() {
    openModal()
  }
  function handleCloseModal() {
    closeModal()
  }

  return (
    <>
    <Modal visible={modalVisible} onClose={handleCloseModal} />
    <ContainerHeader>
      <div className="logoHeader">
        <img src={logoheader} alt="" />
      </div>
      <ul>
        <li  data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              data-aos-duration="1500"><a href="#sobre" >SOBRE</a></li>
        <li data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              data-aos-duration="1000" ><a href="#solucoes">SOLUÇÕES</a></li>
        <li  data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              data-aos-duration="800"><a href="#faleconosco">FALE CONOSCO</a></li>
      </ul>
      <div className="menuMobile">
        <button onClick={handleOpenModal}>
          <Icon name='iconMobile' size={25}/>
        </button>
      </div>
    </ContainerHeader>
    </>
  );

}



