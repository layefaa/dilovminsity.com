'use client'
import React from 'react';
import {CeraPro} from "@/fonts";
import {ourGalleries} from "@/constants/content";
import {Navigation} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import Image from "next/image";
import {hero} from "@/constants/images";
import "swiper/css/navigation";

const OurGallery = () => {

  return (
      <div className={'defaultContentContainer px-0 md:px-[5rem]'}>
        <h2 className={`defaultHeader ${CeraPro.className} `}>{ourGalleries.header}</h2>
        <h3 className={`defaultHeaderParagraph mb-[1.5rem]  md:mb-[3rem] `}>{ourGalleries.paragraph}</h3>
        <div className={'hidden md:block'}>
          <Swiper
              navigation={true} modules={[Navigation]}
              spaceBetween={30}
              slidesPerView={4.5}
              className={'mb-[3rem] text-left  md:mb-[5rem]'}
          >
            <SwiperSlide>
              <div className=" relative h-[25rem] w-full">
                <Image fill className={'object-cover object-bottom'} src={hero} alt={''}/>
              </div>
              <p className={`pt-[1rem] ${CeraPro.className} capitalise text-dm-primary-green`}>Video Categories</p>
            </SwiperSlide>
          </Swiper>
          <div
              className={'text-left'}>
            <h4 className={`pb-[2rem] uppercase ${CeraPro.className} defaultHeaderLight `}>Videos</h4>
            <Swiper
                navigation={true} modules={[Navigation]}
                // centeredSlides={true}
                spaceBetween={30}
                slidesPerView={2.9}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide>
                <div className=" relative h-[25rem] w-full">
                  <Image fill className={'object-cover object-bottom'} src={hero} alt={''}/>
                </div>
                <p className={`pt-[1rem] ${CeraPro.className} capitalise text-dm-primary-green`}>Video Categories</p>
              </SwiperSlide>


            </Swiper>
          </div>

        </div>
        <div className={'block md:hidden'}>
          <Swiper
              navigation={true} modules={[Navigation]}
              // centeredSlides={true}
              spaceBetween={30}
              slidesPerView={1}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>
              <div className=" relative h-[25rem] w-full">
                <Image fill className={'object-cover object-bottom'} src={hero} alt={''}/>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=" relative h-[25rem] w-full">
                <Image fill className={'object-cover object-bottom'} src={hero} alt={''}/>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=" relative h-[25rem] w-full">
                <Image fill className={'object-cover object-bottom'} src={hero} alt={''}/>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=" relative h-[25rem] w-full">
                <Image fill className={'object-cover object-bottom'} src={hero} alt={''}/>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className={'text-center text-24'}>
          <p className={'defaultHeaderLight  mb-[2rem]'}>For we are God’s fellow workers; you are God’s field, God’s building.</p>
          <p> 1 Corinthians 3:9</p>
        </div>

      </div>
  );
};

export default OurGallery;
