'use client'
import React from 'react';
import {CeraPro} from "@/fonts";
import {ourGalleries, videos} from "@/constants/content";
import {Carousel} from "@/components/organisms";
import {pictures} from "@/constants/images";

const OurGallery = () => {

  return (
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
        <div className={'block md:hidden'}>
        </div>
        <div className={'text-center text-24'}>
          <p className={'defaultHeaderLight  mb-[2rem]'}>For we are God’s fellow workers; you are God’s field, God’s
            building.</p>
          <p> 1 Corinthians 3:9</p>
        </div>

      </div>
  );
};

export default OurGallery;
