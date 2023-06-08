import React from 'react';
import {CeraPro} from "@/fonts";
import {volunteering_ops} from "@/constants/content";
import Image from "next/image";

const VolunteeringOps = () => {
  return (
      <div className={'defaultContentContainer'}>
        <h2 className={`defaultHeader ${CeraPro.className} `}>{volunteering_ops.header}</h2>
        <p className={'defaultSectionParagraph mb-[1.5rem]  md:mb-[3rem] text-white'}>{volunteering_ops.paragraph}</p>
        <div className={'flex flex-col md:flex-row text-left px-0 gap-[3rem] '}>
          <div className={'w-full md:w-1/3 lg:w-1/4'}>
            <div className={'relative  w-full aspect-[1.5] mb-[4rem]'}>
              <Image fill src={volunteering_ops.img1} alt={''}/>
            </div>

            <h4 className={`defaultSectionHeader ${CeraPro.className} text-dm-primary-green`}>{volunteering_ops.section1Header}</h4>
            <p className={'defaultSectionParagraph'}>{volunteering_ops.section1Paragraph}</p>
          </div>
          <div className={'w-full md:w-1/3 lg:w-1/4'}>
            <div className={'relative  w-full aspect-[1.5] mb-[4rem]'}>
              <Image fill src={volunteering_ops.img2} alt={''}/>
            </div>

            <h4 className={`defaultSectionHeader ${CeraPro.className} text-dm-primary-green`}>{volunteering_ops.section2Header}</h4>
            <p className={'defaultSectionParagraph'}>{volunteering_ops.section2Paragraph}</p>
          </div>
          <div className={'w-full md:w-1/3 lg:w-1/4'}>
            <div className={'relative  w-full aspect-[1.5] mb-[4rem]'}>
              <Image fill src={volunteering_ops.img3} alt={''}/>
            </div>

            <h4 className={`defaultSectionHeader ${CeraPro.className} text-dm-primary-green`}>{volunteering_ops.section3Header}</h4>
            <p className={'defaultSectionParagraph'}>{volunteering_ops.section3Paragraph}</p>
          </div>
          <div className={'w-full md:w-1/3 lg:w-1/4'}>
            <div className={'relative  w-full aspect-[1.5] mb-[4rem]'}>
              <Image fill src={volunteering_ops.img4} alt={''}/>
            </div>

            <h4 className={`defaultSectionHeader ${CeraPro.className} text-dm-primary-green`}>{volunteering_ops.section4Header}</h4>
            <p className={'defaultSectionParagraph'}>{volunteering_ops.section4Paragraph}</p>
          </div>
        </div>
      </div>
  );
};

export default VolunteeringOps;
