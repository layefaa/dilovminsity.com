import {createContext, useContext} from "react";
import {IMenuContext} from "@/interfaces";
export const MenuContext = createContext<IMenuContext>({
  isOpen: false,
  toggleMenu() {},
})

export const useMenuContext = () => useContext(MenuContext)