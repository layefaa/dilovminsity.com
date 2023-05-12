'use client'
import React from 'react';
import {MenuSwitch} from "@/components/atoms";
import {useMenuContext} from "@/context/MenuContext";

const Menu = () => {
  const {toggleMenu} = useMenuContext()
  return (
      <div className={`flex items-center gap-[1.6rem] cursor-pointer`} onClick={() => {
        toggleMenu()
      }}>
        <p>Menu</p>
        <MenuSwitch/>
      </div>
  );
};

export default Menu;
