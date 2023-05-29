import React from 'react';
import Image from "next/image";
import {hero} from "@/constants/images";
import {mission} from "@/constants/content";
import {CeraPro} from "@/fonts";
import {Button} from "@/components/atoms";

const Hero = () => {
  return (
      <div className={'relative h-screen w-full'}>
        <Image fill className={'object-cover object-bottom'} src={hero} alt={''}/>
        <div className={'absolute h-full w-full flex flex-col justify-center items-center text-dm-primary-white'}>
          <h1 className={'text-7xl font-bold mb-10'}>{mission.header}</h1>
          <h3>{mission.header2}</h3>
          <p className={`${CeraPro.className} text-24 mb-10 font-[700]`}>{mission.paragraph}</p>
          <Button label={'Join the Movement'} type={'button'}/>
        </div>
      </div>
  );
};

export default Hero;
