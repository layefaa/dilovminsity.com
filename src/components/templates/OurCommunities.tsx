import React from 'react';
import {ourCommunity} from "@/constants/content";
import Image from "next/image";
import {CeraPro} from "@/fonts";

const OurCommunities = () => {
  return (
      <div className={'defaultContentContainer px-0 md:px-[5rem]'}>
        <h2 className={`defaultHeader ${CeraPro.className} `}>{ourCommunity.header}</h2>
        <h3 className={`defaultHeaderParagraph mb-[1.5rem]  md:mb-[3rem] `}>{ourCommunity.paragraph}</h3>
        <div className={'flex flex-col md:flex-row text-left px-0 gap-[3rem] '}>
          <div className={'w-full md:w-1/2'}>
            <div className={'relative  w-full aspect-[1.5] mb-[4rem]'}>
              <Image fill src={ourCommunity.img1} alt={''}/>
            </div>

            <h4 className={`defaultSectionHeader ${CeraPro.className}`}>{ourCommunity.section1Header}</h4>
            <p className={'defaultSectionParagraph'}>{ourCommunity.section1Paragraph}</p>
          </div>
          <div className={'w-full md:w-1/2'}>
            <div className={'relative  w-full aspect-[1.5] mb-[4rem]'}>
              <Image fill src={ourCommunity.img2} alt={''}/>
            </div>
            <h4 className={`defaultSectionHeader ${CeraPro.className}`}>{ourCommunity.section2Header}</h4>
            <p className={'defaultSectionParagraph'}>{ourCommunity.section2Paragraph}</p>
          </div>
        </div>

      </div>
  );
};

export default OurCommunities;
