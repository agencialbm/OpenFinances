import { createContext, FunctionComponent, ReactNode, useState } from "react";

interface IModal {
  openModal: () => void;
  closeModal: () => void;
  modalVisible: boolean;
}

export const ModalContext = createContext<IModal>({
  openModal: () => {},
  closeModal: () => {},
  modalVisible: false,
});

interface IModalContextProvider {
  children: ReactNode;
}

const ModalContextProvider = ({ children }: IModalContextProvider) => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <ModalContext.Provider value={{ modalVisible, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalContextProvider;
