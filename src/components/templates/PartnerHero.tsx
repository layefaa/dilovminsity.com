'use client'
import React from 'react';
import Image from "next/image";
import {CabinetGrotesk, CeraPro} from "@/fonts";
import {partnerHero} from "@/constants/content";
import {Swiper, SwiperSlide} from "swiper/react";
import SwiperCore, {Autoplay, Pagination} from "swiper";
import 'swiper/css';
import {CarouselPagination} from "@/utils/CarouselPagination";

const PartnerHero = () => {
  SwiperCore.use([Autoplay])
  return (
      <div className={'relative h-screen w-full '}>
        <div className="absolute z-0 w-full h-full">
          <Swiper
              autoplay
              loop
              slidesPerView={1}
              pagination={CarouselPagination}
              modules={[Pagination]}
              className="w-full h-full relative "
          >
            <SwiperSlide>
              <div className="w-screen relative h-screen">
                <Image fill className={'object-cover object-bottom'} src={partnerHero.hero} alt={''}/>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-screen relative h-screen">
                  <Image fill className={'object-cover object-bottom'} src={'/img/children.webp'} alt={''}/>
              </div>
            </SwiperSlide>

          </Swiper>
        </div>

        <div
            className={' z-[2] absolute h-full w-full flex flex-col justify-center text-center items-center text-dm-primary-white px-24 sm:px-40 md:px-48 lg:px-80 '}>
          <h1 className={` text-40 md:text-64 leading-[100%] font-bold mb-[1rem] ${CabinetGrotesk.className}`}>{partnerHero.header}</h1>
          <p className={`${CeraPro.className} text-16 mb-[3.2rem]`}>{partnerHero.paragraph}</p>
        </div>
      </div>
  );
};

export default PartnerHero;
