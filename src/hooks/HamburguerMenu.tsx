import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

import HamburguerMenuContextDTO from '../dtos/HamburguerMenuContextDTO';

const HamburguerMenuContext = createContext({} as HamburguerMenuContextDTO);

export const HamburguerMenuProvider: React.FC = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleHamburguerMenu = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  // Set isOpen as false if the user is using the site on larger screens
  useEffect(() => {
    window.addEventListener('resize', () => {
      if (window.innerWidth > 700 && isOpen) setIsOpen(false);
    });
  }, [isOpen]);

  return (
    <HamburguerMenuContext.Provider
      value={{
        hamburgerMenuStatus: isOpen,
        toggleHamburguerMenu,
      }}
    >
      {children}
    </HamburguerMenuContext.Provider>
  );
};

const useHamburgerMenu = (): HamburguerMenuContextDTO => {
  const context = useContext(HamburguerMenuContext);

  return context;
};

export default useHamburgerMenu;
