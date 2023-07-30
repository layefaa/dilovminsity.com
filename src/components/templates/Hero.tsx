'use client'
import React from 'react';
import {mission} from "@/constants/content";
import {CabinetGrotesk, CeraPro} from "@/fonts";
import {Button} from "@/components/atoms";
import {useRouter} from 'next/navigation';
import {Swiper, SwiperSlide} from "swiper/react";
import SwiperCore, {Autoplay, Pagination} from "swiper";
import 'swiper/css';
import {CarouselPagination} from "@/utils/CarouselPagination";
import Image from "next/image";
import {hero} from "@/constants/images";

const Hero = () => {
  SwiperCore.use([Autoplay])
  const router = useRouter();
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
            {/*{*/}
            {/*  [1, 2, 3].map((_, index) => {*/}
            {/*        return (*/}
            {/*<SwiperSlide>*/}

            {/*</SwiperSlide>*/}
            <SwiperSlide>
              <div className="w-screen relative h-screen">
                <Image sizes="100vw" fill className={'object-cover object-bottom'} src={hero} alt={''}/>
              </div>
            </SwiperSlide>
            {/*<SwiperSlide>*/}
            {/*  <div className="w-screen relative h-screen">*/}
            {/*    <Image sizes="100vw" fill className={'object-cover object-top'} src={'/img/youth.webp'} alt={''}/>*/}
            {/*  </div>*/}
            {/*</SwiperSlide>*/}

          </Swiper>
        </div>


        <div
            className={' z-[2] absolute h-full w-full flex flex-col justify-center text-center items-center text-dm-primary-white px-24 sm:px-40 md:px-48 lg:px-80 '}>
          <h1 className={` text-40 md:text-64 leading-[100%] font-bold mb-[1rem] linear-gradient ${CabinetGrotesk.className}`}>{mission.header}</h1>
          <h3 className={`${CabinetGrotesk.className} text-32 md:text-64 mb-[2rem] leading-[100%] font-bold`}>{mission.header2}</h3>
          <p className={`${CeraPro.className} text-16 md:text-20 mb-[3.2rem] font-[500]`}>{mission.paragraph}</p>
          <Button onClick={() => router.push('/volunteer')} label={'Join the Movement'} type={'button'}/>
        </div>
      </div>
  );
};

export default Hero;