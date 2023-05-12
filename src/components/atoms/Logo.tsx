import React from 'react';
import logo from '../../../public/logo.png'
import Image from "next/image";

const Logo = () => {
  return (
      <Image src={logo} alt={'logo'} fill priority/>
  );
};

export default Logo;
