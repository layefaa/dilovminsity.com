'use client'
import React from 'react';
import {SwiperSlide} from "swiper/react";
import Image from "next/image";
import {hero} from "@/constants/images";
import {CeraPro} from "@/fonts";
import 'swiper/css';

const Slide = ({type, name}: { type: string, name: string }) => {
  return (
      <SwiperSlide>
        {
          (type === 'pic') ?
              <div className=" relative h-[25rem] w-full">
                <Image fill className={'object-cover object-bottom'} src={hero} alt={''}/>
              </div>
              :
              <div className=" relative h-[25rem] w-full">
                <video className={'w-full h-full'} src={'/vids/0E73F77602836756EBA6B45BC3E963C10.mp4'}></video>
              </div>
        }
        <p className={`pt-[1rem] ${CeraPro.className} capitalise text-dm-primary-green`}>{name}</p>
      </SwiperSlide>
  );
};

export default Slide;
