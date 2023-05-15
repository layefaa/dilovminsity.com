'use client'
import {MenuSwitch} from "@/components/atoms";
import {useMenuContext} from "@/context/MenuContext";

const Menu = () => {
  const {toggleMenu} = useMenuContext()
  return (
      <div className={`flex items-center gap-[.5rem] cursor-pointer`} onClick={() => {
        toggleMenu()
      }}>
        <MenuSwitch/>
        <p>Menu</p>
      </div>
  );
};

export default Menu;
