import {createContext, useContext} from "react";
import {IMenuContext} from "@/interfaces";

export const MenuContext = createContext<IMenuContext>({
  isOpen: false,
  toggleMenu() {
  },
  isDonateOpen: false,
  toggleDonate() {
  },
  isVideo: false,
  toggleVideo(): void {
  },
  video: {},
  setVideo(x): void{}

})

export const useMenuContext = () => useContext(MenuContext)