import React from 'react';
import Image from "next/image";
import {hero} from "@/constants/images";
import {mission} from "@/constants/content";
import {CabinetGrotesk, CeraPro} from "@/fonts";
import {Button} from "@/components/atoms";

const Hero = () => {
  return (
      <div className={'relative h-screen w-full'}>
        <Image fill className={'object-cover object-bottom'} src={hero} alt={''}/>
        <div className={'absolute h-full w-full flex flex-col justify-center items-center text-dm-primary-white '}>
          <h1 className={`text-64 leading-[6.4rem] font-bold mb-[1rem] linear-gradient ${CabinetGrotesk.className}`}>{mission.header}</h1>
          <h3 className={`${CabinetGrotesk.className} text-64 mb-[2rem] leading-[6.4rem] font-bold`}>{mission.header2}</h3>
          <p className={`${CeraPro.className} text-20 mb-[3.2rem] font-[500]`}>{mission.paragraph}</p>
          <Button label={'Join the Movement'} type={'button'}/>
        </div>
      </div>
  );
};

export default Hero;