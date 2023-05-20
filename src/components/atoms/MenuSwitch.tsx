'use client'
import {useMenuContext} from "@/context/MenuContext";
import {AiOutlineMenu, MdOutlineCancel} from "react-icons/all";

const MenuSwitch = () => {
  const {isOpen} = useMenuContext()
  return (
      <>
        {(!isOpen) ? <AiOutlineMenu/> : <MdOutlineCancel/>}
      </>
  );
};

export default MenuSwitch;
