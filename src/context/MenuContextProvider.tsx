"use client"
import {ReactNode} from 'react';
import {MenuContext} from "@/context/MenuContext";
import {useCycle} from "framer-motion";

const MenuContextProvider = ({children}: { children: ReactNode }) => {

  const [isOpen, toggle] = useCycle<boolean>(false, true)
  const toggleMenu = () => {
    toggle()
  }

  const [isDonateOpen, toggleD] = useCycle<boolean>(false, true)

  const toggleDonate = () => {
    toggleD()
  }

  return (
      <MenuContext.Provider value={{isOpen, toggleMenu, isDonateOpen, toggleDonate}}>
        {children}
      </MenuContext.Provider>
  );
};

export default MenuContextProvider;
