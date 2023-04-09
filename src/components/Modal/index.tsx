import {  ContainerModal,  MenuModal,  Overlay } from './styled';
import { useContext, useEffect } from 'react';
import { ModalContext } from '@/context/example';
import { Icon } from '../Icon';




interface IModal {
  visible: boolean;
  onClose: () => void
}

export function Modal({visible, onClose}: IModal){

  const { closeModal } = useContext(ModalContext);
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent){
      if(event.key === 'Escape'){
        onClose();
      }
    }
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };

  },[onClose]);

  if(!visible){
    return null;
  }

  function handleSobre(){

    closeModal()
  }

  function handleSolucoes(){

    closeModal()
  }

  function handleFaleConosco(){

    closeModal()
  }



  return(
    <Overlay>
      <ContainerModal>
          <button type='button' onClick={onClose}>
            <Icon name='iconCloseModal' size={30} />
          </button>
          <MenuModal>

          <li> <a href='#sobre'><button type='button' onClick={handleSobre}> SOBRE </button></a></li>
          <li> <a href='#solucoes'><button onClick={handleSolucoes}>SOLUÇÕES</button></a></li>
          <li><a href='#faleconosco'><button onClick={handleFaleConosco}>FALE CONOSCO</button></a> </li>


          </MenuModal>
      </ContainerModal>
    </Overlay>
  );
}
