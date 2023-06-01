import React from 'react';
import {ourObjectives} from "@/constants/content";
import Image from "next/image";
import {CeraPro} from "@/fonts";

const content = 'h-fit row-span-1'
const image = 'relative row-span-3 aspect-ratio-[4]'

const OurObjectives = () => {
  return (
      <div className={'defaultContentContainer px-0 md:px-[5rem]'}>
        <h2 className={`defaultHeader ${CeraPro.className} `}>{ourObjectives.header}</h2>
        <h3 className={`defaultHeaderParagraph  mb-[2.5rem] `}>{ourObjectives.paragraph}</h3>
        <div className={'grid grid-cols-2 grid-rows-9 gap-[5rem] text-left px-0 md:px-[15rem]'}>
          <div className={`${image} `}>
            <Image fill src={ourObjectives.img1} alt={''}/>
          </div>
          <div></div>
          <div className={`${content}`}>
            <h4 className={`defaultSectionHeader ${CeraPro.className} w-2/3`}>{ourObjectives.section1Header}</h4>
            <p className={'defaultSectionParagraph'}>{ourObjectives.section1Paragraph}</p>
          </div>
          <div className={`${image}`}>
            <Image fill src={ourObjectives.img2} alt={''}/>
          </div>
          <div className={`${content}`}>
            <h4 className={`defaultSectionHeader ${CeraPro.className} w-2/3`}>{ourObjectives.section2Header}</h4>
            <p className={'defaultSectionParagraph'}>{ourObjectives.section2Paragraph}</p>
          </div>
          <div className={`${image}`}>
            <Image fill src={ourObjectives.img3} alt={''}/>
          </div>
          <div className={`${content}`}>
            <h4 className={`defaultSectionHeader ${CeraPro.className} w-2/3`}>{ourObjectives.section3Header}</h4>
            <p className={'defaultSectionParagraph'}>{ourObjectives.section3Paragraph}</p>
          </div>
          <div className={`${image}`}>
            <Image fill src={ourObjectives.img4} alt={''}/>
          </div>
          <div className={`${content}`}>
            <h4 className={`defaultSectionHeader ${CeraPro.className} w-2/3`}>{ourObjectives.section4Header}</h4>
            <p className={'defaultSectionParagraph'}>{ourObjectives.section4Paragraph}</p>
          </div>
        </div>
      </div>
  );
};

export default OurObjectives;
