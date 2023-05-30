import React from 'react';
import {homeHeaderStyle} from "@/styles";
import {ourObjectives} from "@/constants/content";
import Image from "next/image";

const OurObjectives = () => {
  return (
      <div>
        <div>
          <h2 className={`${homeHeaderStyle}`}>{ourObjectives.header}</h2>
          <h3>{ourObjectives.paragraph}</h3>

          <div>
            <div className="image">
              <Image width={1000} height={1000} src={ourObjectives.img1} alt={''}/>
            </div>
            <div className="content">
              <h4>{ourObjectives.section1Header}</h4>
              <h4>{ourObjectives.section1Paragraph}</h4>
            </div>
            <div className="image">
              <Image width={1000} height={1000} src={ourObjectives.img2} alt={''}/>
            </div>
            <div className="content">
              <h4>{ourObjectives.section2Header}</h4>
              <h4>{ourObjectives.section2Paragraph}</h4>
            </div>
            <div className="image">
              <Image width={1000} height={1000} src={ourObjectives.img3} alt={''}/>
            </div>
            <div className="content">
              <h4>{ourObjectives.section3Header}</h4>
              <h4>{ourObjectives.section3Paragraph}</h4>
            </div>
            <div className="image">
              <Image width={1000} height={1000} src={ourObjectives.img4} alt={''}/>
            </div>
            <div className="content">
              <h4>{ourObjectives.section4Header}</h4>
              <h4>{ourObjectives.section4Paragraph}</h4>
            </div>

          </div>

        </div>
      </div>
  );
};

export default OurObjectives;
