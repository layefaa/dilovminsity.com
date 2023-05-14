import React from 'react';
import Image from "next/image";
import {hero} from "@/constants/images";
import {homePage} from "@/constants/content";
import {playfairDisplay} from "@/utils/fonts";

const Hero = () => {
  return (
      <div className={'relative h-screen w-full'}>
        <Image fill className={'object-cover object-bottom'} src={hero} alt={''}/>
        <div className={'absolute h-full w-full flex flex-col justify-center items-center text-dm-primary-white'}>
          <h1 className={'text-7xl font-bold mb-10'}>{homePage.header}</h1>
          <p className={`${playfairDisplay.className} font-[700]`}>{homePage.heroParagraph}</p>
        </div>

      </div>
  );
};

export default Hero;
