import React, { createContext, useContext, useState } from 'react';

interface DrawerContextProps {
  isOpen: boolean;
  openDrawer: () => void;
  closeDrawer: () => void;
}

const DrawerContext = createContext<DrawerContextProps>({
  isOpen: false,
  openDrawer: () => {},
  closeDrawer: () => {},
});

interface DrawerProviderProps {
  children: React.ReactNode;
}

export const DrawerProvider: React.FC<DrawerProviderProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openDrawer = (): void => {
    setIsOpen(true);
    document.body.classList.add('overflow-hidden');
  };

  const closeDrawer = (): void => {
    setIsOpen(false);
    document.body.classList.remove('overflow-hidden');
  };

  const contextValue: DrawerContextProps = {
    isOpen,
    openDrawer,
    closeDrawer,
  };

  return (
    <DrawerContext.Provider value={contextValue}>
      {children}
    </DrawerContext.Provider>
  );
};

export const useDrawer = () => {
  const context = useContext(DrawerContext);
  if (!context) {
    throw new Error('useDrawer must be used within a DrawerProvider');
  }
  return context;
};
