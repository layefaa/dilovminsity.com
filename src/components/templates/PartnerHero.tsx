import React from 'react';
import Image from "next/image";
import {CabinetGrotesk, CeraPro} from "@/fonts";
import {partnerHero} from "@/constants/content";

const PartnerHero = () => {
  return (
      <div className={'relative h-screen w-full '}>
        <Image fill className={'object-cover object-bottom'} src={partnerHero.hero} alt={''}/>
        <div
            className={'absolute h-full w-full flex flex-col justify-center text-center items-center text-dm-primary-white px-24 sm:px-40 md:px-48 lg:px-80 '}>
          <h1 className={` text-40 md:text-64 leading-[100%] font-bold mb-[1rem] ${CabinetGrotesk.className}`}>{partnerHero.header}</h1>
          <p className={`${CeraPro.className} text-16 mb-[3.2rem]`}>{partnerHero.paragraph}</p>
        </div>
      </div>
  );
};

export default PartnerHero;
