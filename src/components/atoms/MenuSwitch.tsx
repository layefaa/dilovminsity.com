'use client'
import {useMenuContext} from "@/context/MenuContext";
import {AiOutlineMenu} from "react-icons/ai";
import {MdOutlineCancel} from "react-icons/md";

const MenuSwitch = () => {
  const {isOpen} = useMenuContext()
  return (
      <>
        {(!isOpen) ? <AiOutlineMenu/> : <MdOutlineCancel/>}
      </>
  );
};

export default MenuSwitch;
