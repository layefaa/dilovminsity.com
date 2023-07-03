'use client'
import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper";
import 'swiper/css';
import "swiper/css/navigation";
import Image from "next/image";
import {CeraPro} from "@/fonts";
import {useMenuContext} from "@/context/MenuContext";

const Carousel = ({slides, pictures, type, name, videos}: {
  slides: number,
  type: string,
  name: string,
  pictures?: any,
  videos?: any,
}) => {
  const {toggleVideo, setVideo} = useMenuContext()
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
                    <>
                      <SwiperSlide onClick={() => {
                        toggleVideo()
                        setVideo(x)

                      }} key={i} className={'cursor-pointer '}>

                        <div className=" relative h-[25rem] w-full">
                          <div className={'absolute w-full bg-black filter3 z-[3] h-full flex justify-center items-center'}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <g id="icon-park-solid:play">
                                <g id="Mask group">
                                  <mask id="mask0_265_127"  maskUnits="userSpaceOnUse" x="0" y="0" width="23" height="23">
                                    <g id="Group">
                                      <g id="Group_2">
                                        <path id="Vector" d="M11.5625 21.1978C16.8841 21.1978 21.1978 16.8841 21.1978 11.5625C21.1978 6.24095 16.8841 1.92725 11.5625 1.92725C6.24095 1.92725 1.92725 6.24095 1.92725 11.5625C1.92725 16.8841 6.24095 21.1978 11.5625 21.1978Z" fill="white" stroke="white" stroke-width="1.92705" stroke-linejoin="round"/>
                                        <path id="Vector_2" d="M9.63525 11.5625V8.22485L12.5258 9.89368L15.4164 11.5625L12.5258 13.2313L9.63525 14.9002V11.5625Z" fill="black" stroke="black" stroke-width="1.92705" stroke-linejoin="round"/>
                                      </g>
                                    </g>
                                  </mask>
                                  <g mask="url(#mask0_265_127)">
                                    <path id="Vector_3" d="M0 0H23.1246V23.1246H0V0Z" fill="white"/>
                                  </g>
                                </g>
                              </g>
                            </svg>

                          </div>
                          <video preload={'meta'} className={'w-full h-full'} src={x.url}></video>
                        </div>
                        <p className={`pt-[1rem] ${CeraPro.className} capitalise text-dm-primary-green`}>{x.name}</p>
                      </SwiperSlide>

                    </>


                )

              })
        }

      </Swiper>
  );
};

export default Carousel;
