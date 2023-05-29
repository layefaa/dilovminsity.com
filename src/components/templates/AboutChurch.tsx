import React from 'react';
import {homeHeaderStyle} from "@/styles";
import {aboutChurch} from "@/constants/content";
import Image from "next/image";

const AboutChurch = () => {
  return (
      <div>
        <h2 className={`${homeHeaderStyle}`}>{aboutChurch.header}</h2>
        <h3>{aboutChurch.paragraph}</h3>
        <Image width={1000} height={1000} src={aboutChurch.img} alt={'jesus'}/>
        <div>
          <div>
            <h4>{aboutChurch.section1Header}</h4>
            <p>{aboutChurch.section1Paragraph}</p>
          </div>
          <div>
            <h4>{aboutChurch.section2Header}</h4>
            <p>{aboutChurch.section2Paragraph}</p>
          </div>
        </div>

      </div>
  );
};

export default AboutChurch;
