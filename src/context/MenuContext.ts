import {createContext, useContext} from "react";
import {IMenuContext} from "@/interfaces";
export const MenuContext = createContext<IMenuContext>({
  isOpen: false,
  toggleMenu() {},
  isDonateOpen: false,
  toggleDonate() {},
})

export const useMenuContext = () => useContext(MenuContext)