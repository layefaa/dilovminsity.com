import React from 'react';
import Image from "next/image";
import {volunteerHero} from "@/constants/content";
import {CabinetGrotesk} from "@/fonts";
import {Button} from "@/components/atoms";

const VolunteerHero = () => {
  return (
      <div className={'relative h-screen w-full '}>
        <Image fill className={'object-cover object-bottom'} src={volunteerHero.hero} alt={''}/>
        <div
            className={'absolute h-full w-full flex flex-col justify-center text-center items-center text-dm-primary-white px-24 sm:px-40 md:px-48 lg:px-80 '}>
          <h1 className={` text-40 md:text-64 leading-[100%] font-bold mb-[1rem] ${CabinetGrotesk.className}`}>{volunteerHero.header}</h1>
          <Button label={'Apply Now'} type={'button'}/>
        </div>
      </div>
  );
};

export default VolunteerHero;
