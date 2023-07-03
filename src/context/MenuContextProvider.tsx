"use client"
import {ReactNode} from 'react';
import {MenuContext} from "@/context/MenuContext";
import {useCycle} from "framer-motion";
import {useState} from "react";

const MenuContextProvider = ({children}: { children: ReactNode }) => {

  const [isOpen, toggle] = useCycle<boolean>(false, true)
  const toggleMenu = () => {
    toggle()
  }

  const [isDonateOpen, toggleD] = useCycle<boolean>(false, true)

  const toggleDonate = () => {
    toggleD()
  }

  const [isVideo, toggleV] = useCycle<boolean>(false, true)
 const toggleVideo = () => {
    toggleV()
 }

 const [video, setVideo] = useState({})


  return (
      <MenuContext.Provider value={{isOpen,toggleVideo,setVideo, video, isVideo, toggleMenu, isDonateOpen, toggleDonate}}>
        {children}
      </MenuContext.Provider>
  );
};

export default MenuContextProvider;
