import { createContext, useContext, useState } from 'react';

interface ModelContextProps {
  isModalOpen: boolean;
  closeModal: () => void;
  openModal: () => void;
}

const ModalContext = createContext<ModelContextProps>({
  isModalOpen: false,
  closeModal: () => {},
  openModal: () => {},
});

interface ModalProviderProps {
  children: React.ReactNode;
}

export const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => setIsModalOpen(false);
  const openModal = () => setIsModalOpen(true);

  return (
    <ModalContext.Provider value={{ isModalOpen, closeModal, openModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModalContext = () => useContext(ModalContext);
