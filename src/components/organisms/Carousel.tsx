'use client'
import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper";
import 'swiper/css';
import "swiper/css/navigation";
import Image from "next/image";
import {CeraPro} from "@/fonts";

const Carousel = ({slides, pictures, type, name, videos}: {
  slides: number,
  type: string,
  name: string,
  pictures?: any,
  videos?: any,
}) => {

  return (
      <Swiper
          navigation={true}
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerView={slides}
          className={'text-left'}
      >
        {
          (type === 'pic') ?
              // @ts-ignore
              pictures.map((x, i) => {
                return (
                    <SwiperSlide key={i} className={'cursor-pointer'}>
                      <div className=" relative h-[25rem] w-full">
                        <Image fill className={'object-cover object-bottom'} src={x.url} alt={''}/>
                      </div>
                      <p className={`pt-[1rem] ${CeraPro.className} capitalise text-dm-primary-green`}>{x.name}</p>
                    </SwiperSlide>
                )

              })

              :
              // @ts-ignore
              videos.map((x, i) => {
                return (

                    <SwiperSlide key={i} className={'cursor-pointer'}>
                      <div className=" relative h-[25rem] w-full">
                        <video className={'w-full h-full'} src={x.url}></video>
                      </div>
                      <p className={`pt-[1rem] ${CeraPro.className} capitalise text-dm-primary-green`}>{x.name}</p>
                    </SwiperSlide>
                )

              })
        }

      </Swiper>
  );
};

export default Carousel;
