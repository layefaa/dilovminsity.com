'use client'
import React from 'react';
import Image from "next/image";
import {hero} from "@/constants/images";
import {mission} from "@/constants/content";
import {CabinetGrotesk, CeraPro} from "@/fonts";
import {Button} from "@/components/atoms";
import {useRouter} from 'next/navigation';

const Hero = () => {
  const router = useRouter();
  return (
      <div className={'relative h-screen w-full '}>
        <Image fill className={'object-cover object-bottom'} src={hero} alt={''}/>
        <div className={'absolute h-full w-full flex flex-col justify-center text-center items-center text-dm-primary-white px-24 sm:px-40 md:px-48 lg:px-80 '}>
          <h1 className={` text-40 md:text-64 leading-[100%] font-bold mb-[1rem] linear-gradient ${CabinetGrotesk.className}`}>{mission.header}</h1>
          <h3 className={`${CabinetGrotesk.className} text-32 md:text-64 mb-[2rem] leading-[100%] font-bold`}>{mission.header2}</h3>
          <p className={`${CeraPro.className} text-16 md:text-20 mb-[3.2rem] font-[500]`}>{mission.paragraph}</p>
          <Button onClick={()=> router.push('/volunteer')} label={'Join the Movement'} type={'button'}/>
        </div>
      </div>
  );
};

export default Hero;