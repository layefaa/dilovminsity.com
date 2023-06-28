import React from 'react';
import {aboutChurch} from "@/constants/content";
import Image from "next/image";
import {CeraPro} from "@/fonts";

const AboutChurch = () => {
  return (
      <div className={'defaultContentContainer bg-dm-primary-white text-dm-primary-black'}>
        <h2 className={`defaultHeader ${CeraPro.className} defaultHeaderDark `}>{aboutChurch.header}</h2>
        <h3 className={`defaultHeaderParagraph`}>{aboutChurch.paragraph}</h3>
        <div className={'relative w-full aspect-[1.5] md:aspect-[2.5]'}>
          <Image fill src={aboutChurch.img} alt={'jesus'}/>
        </div>
        <div className={'flex flex-col md:flex-row text-left px-0 md:px-[5rem] gap-[3rem]'}>
          <div className={'w-full md:w-1/3'}>
            <h4 className={`defaultSectionHeader ${CeraPro.className}`}>{aboutChurch.section1Header}</h4>
            <p className={'defaultSectionParagraph defaultSectionParagraphDark '}>{aboutChurch.section1Paragraph}</p>
          </div>
          <div className={'w-full md:w-1/3'}>
            <h4 className={`defaultSectionHeader ${CeraPro.className}`}>{aboutChurch.section3Header}</h4>
            <p className={'defaultSectionParagraph defaultSectionParagraphDark '}>{aboutChurch.section3Paragraph}</p>
          </div>
          <div className={'w-full md:w-1/3'}>
            <h4 className={`defaultSectionHeader ${CeraPro.className}`}>{aboutChurch.section2Header}</h4>
            <p className={'defaultSectionParagraph defaultSectionParagraphDark '}>{aboutChurch.section2Paragraph}</p>
          </div>

        </div>

      </div>
  );
};

export default AboutChurch;
