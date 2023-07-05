'use client'
import React from 'react';
import Image from "next/image";
import {volunteerHero} from "@/constants/content";
import {CabinetGrotesk} from "@/fonts";
import {Swiper, SwiperSlide} from "swiper/react";
import SwiperCore, {Autoplay, Pagination} from "swiper";
import 'swiper/css';
import {Button} from "@/components/atoms";
import {CarouselPagination} from "@/utils/CarouselPagination";

const VolunteerHero = () => {
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
                <div className={'absolute w-full bg-black filter3 z-[3] h-full flex justify-center items-center'}></div>
                <Image fill className={'object-cover object-bottom'} src={volunteerHero.hero2} alt={''}/>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-screen relative h-screen">
                <Image fill className={'object-cover object-bottom'} src={volunteerHero.hero1} alt={''}/>
              </div>
            </SwiperSlide>

          </Swiper>
        </div>

        <div
            className={'absolute h-full w-full flex flex-col justify-center text-center items-center text-dm-primary-white px-24 sm:px-40 md:px-48 lg:px-80 '}>
          <h1 className={` text-40 md:text-64 leading-[100%] font-bold mb-[1rem] ${CabinetGrotesk.className}`}>{volunteerHero.header}</h1>
          <Button label={'Apply Now'} type={'button'}/>
        </div>
      </div>
  );
};

export default VolunteerHero;
