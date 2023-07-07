'use client'
import React, {useRef} from 'react';
import {CeraPro} from "@/fonts";
import {ourGalleries, videos} from "@/constants/content";
import {Carousel} from "@/components/organisms";
import {pictures} from "@/constants/images";
import {useMenuContext} from "@/context/MenuContext";

const OurGallery = () => {
  const {isVideo, setVideo, toggleVideo, video} = useMenuContext()
  const videoRef = useRef()

  return (
      <>

        <div
            className={` containerPaddingX  fixed z-[6] top-0 left-0 h-screen w-screen filter1 pt-[7.5rem] md:pt-[8rem]   ${isVideo ? 'flex flex-col' : 'hidden'} `}>
          <div className={'flex justify-end mb-24'}>
            <svg onClick={() => {
              toggleVideo()
              // @ts-ignore
              videoRef.current.pause()
              setVideo({})
            }} className={'cursor-pointer'} width="48" height="48" viewBox="0 0 48 48" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
              <g id="ion:close">
                <path id="Vector"
                      d="M27.1819 24L36.0881 15.0937C36.5108 14.6718 36.7486 14.0992 36.7491 13.502C36.7496 12.9047 36.5129 12.3317 36.0909 11.9091C35.669 11.4864 35.0964 11.2486 34.4992 11.2481C33.9019 11.2476 33.3289 11.4843 32.9062 11.9062L24 20.8125L15.0937 11.9062C14.6711 11.4836 14.0978 11.2461 13.5 11.2461C12.9022 11.2461 12.3289 11.4836 11.9062 11.9062C11.4836 12.3289 11.2461 12.9022 11.2461 13.5C11.2461 14.0978 11.4836 14.6711 11.9062 15.0937L20.8125 24L11.9062 32.9062C11.4836 33.3289 11.2461 33.9022 11.2461 34.5C11.2461 35.0978 11.4836 35.6711 11.9062 36.0937C12.3289 36.5164 12.9022 36.7539 13.5 36.7539C14.0978 36.7539 14.6711 36.5164 15.0937 36.0937L24 27.1875L32.9062 36.0937C33.3289 36.5164 33.9022 36.7539 34.5 36.7539C35.0978 36.7539 35.6711 36.5164 36.0937 36.0937C36.5164 35.6711 36.7539 35.0978 36.7539 34.5C36.7539 33.9022 36.5164 33.3289 36.0937 32.9062L27.1819 24Z"
                      fill="white"/>
              </g>
            </svg>

          </div>
          <div className={'flex w-full h-full justify-center items-center'}>
            {/*@ts-ignore*/}
            <video ref={videoRef} className={'w-auto h-[70vh]'} controls src={video.url} buffering="metadata">
              <source src="movie.mp4" type="video/mp4"/>
            </video>
          </div>
        </div>
        <div className={'defaultContentContainer px-0 md:px-[5rem]'}>
          <h2 className={`defaultHeader ${CeraPro.className} `}>{ourGalleries.header}</h2>
          <h3 className={`defaultHeaderParagraph mb-[1.5rem]  md:mb-[3rem] `}>{ourGalleries.paragraph}</h3>
          <div className={'hidden md:block'}>
            <div className={'mb-[3rem] text-left  md:mb-[5rem]'}>
              <Carousel pictures={pictures} slides={4.5} type={'pic'} name={'test'}/>
            </div>
            <div className={'text-left'}>
              <h4 className={`pb-[2rem] uppercase ${CeraPro.className} defaultHeaderLight `}>Videos</h4>
              <Carousel videos={videos} slides={2.9} type={'vid'} name={'test'}/>
            </div>

          </div>
          <div className={'block md:hidden  mb-[1.5rem]  md:mb-[3rem]'}>
            <div className={'mb-[3rem] text-left  md:mb-[5rem]'}>
              <Carousel pictures={pictures} slides={1} type={'pic'} name={'test'}/>
            </div>
            <div className={'text-left'}>
              <h4 className={`pb-[1rem] uppercase ${CeraPro.className} defaultHeaderLight `}>Videos</h4>
              <Carousel videos={videos} slides={1} type={'vid'} name={'test'}/>
            </div>
          </div>
          <div className={'text-center text-24'}>
            <p className={'defaultHeaderLight  mb-[2rem]'}>For we are God’s fellow workers; you are God’s field, God’s
              building.</p>
            <p> 1 Corinthians 3:9</p>
          </div>

        </div>
      </>

  );
};

export default OurGallery;
