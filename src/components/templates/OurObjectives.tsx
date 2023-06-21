import React from 'react';
import {ourObjectives} from "@/constants/content";
import Image from "next/image";
import {CeraPro} from "@/fonts";

const content = 'h-fit md:row-span-1'
const image = 'relative h-[40rem] md:h-auto w-full md:row-span-3 md:aspect-ratio-[4]'

const OurObjectives = () => {
  return (
      <div className={'defaultContentContainer px-0 md:px-[5rem] bg-dm-primary-white text-dm-primary-black'}>
        <h2 className={`defaultHeader ${CeraPro.className} defaultHeaderDark `}>{ourObjectives.header}</h2>
        <h3 className={`defaultHeaderParagraph  mb-[2.5rem] `}>{ourObjectives.paragraph}</h3>
        <div
            className={'h-full flex flex-col md:grid md:grid-cols-2  md:grid-rows-9 gap-[5rem] text-left px-0 md:px-[20rem]'}>
          <div className={`${image} `}>
            <Image fill src={ourObjectives.img1} alt={''}/>
          </div>
          <div className={'hidden md:block'}></div>
          <div className={`${content}`}>
            <h4 className={`defaultSectionHeader ${CeraPro.className} w-2/3`}>{ourObjectives.section1Header}</h4>
            <p className={'defaultSectionParagraph defaultSectionParagraphDark'}>{ourObjectives.section1Paragraph}</p>
          </div>
          <div className={`${image}`}>
            <Image fill src={ourObjectives.img2} alt={''}/>
          </div>
          <div className={`${content}`}>
            <h4 className={`defaultSectionHeader ${CeraPro.className} w-2/3`}>{ourObjectives.section2Header}</h4>
            <p className={'defaultSectionParagraph defaultSectionParagraphDark'}>{ourObjectives.section2Paragraph}</p>
          </div>
          <div className={`${image}`}>
            <Image fill src={ourObjectives.img3} alt={''}/>
          </div>
          <div className={`${content}`}>
            <h4 className={`defaultSectionHeader ${CeraPro.className} w-2/3`}>{ourObjectives.section3Header}</h4>
            <p className={'defaultSectionParagraph defaultSectionParagraphDark'}>{ourObjectives.section3Paragraph}</p>
          </div>
          <div className={`${image}`}>
            <Image fill src={ourObjectives.img4} alt={''}/>
          </div>
          <div className={`${content}`}>
            <h4 className={`defaultSectionHeader ${CeraPro.className} w-2/3`}>{ourObjectives.section4Header}</h4>
            <p className={'defaultSectionParagraph defaultSectionParagraphDark'}>{ourObjectives.section4Paragraph}</p>
          </div>
        </div>
      </div>
  );
};

export default OurObjectives;
