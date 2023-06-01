import React from 'react';
import {aboutChurch} from "@/constants/content";
import Image from "next/image";
import {CeraPro} from "@/fonts";

const AboutChurch = () => {
  return (
      <div className={'defaultContentContainer'}>
        <h2 className={`defaultHeader ${CeraPro.className} `}>{aboutChurch.header}</h2>
        <h3 className={`defaultHeaderParagraph`}>{aboutChurch.paragraph}</h3>
        <div className={'relative w-full aspect-[0.65] md:aspect-[2.5]'}>
          <Image fill src={aboutChurch.img} alt={'jesus'}/>
        </div>
        <div className={'flex text-left px-0 md:px-[5rem] gap-[3rem]'}>
          <div>
            <h4 className={`defaultSectionHeader ${CeraPro.className}`}>{aboutChurch.section1Header}</h4>
            <p className={'defaultSectionParagraph'}>{aboutChurch.section1Paragraph}</p>
          </div>
          <div>
            <h4 className={`defaultSectionHeader ${CeraPro.className}`}>{aboutChurch.section2Header}</h4>
            <p className={'defaultSectionParagraph'}>{aboutChurch.section2Paragraph}</p>
          </div>
        </div>

      </div>
  );
};

export default AboutChurch;
