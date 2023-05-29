import React from 'react';
import {homeHeaderStyle} from "@/styles";
import {ourCommunity} from "@/constants/content";
import Image from "next/image";

const OurCommunities = () => {
  return (
      <div>
        <h2 className={`${homeHeaderStyle}`}>{ourCommunity.header}</h2>
        <h3>{ourCommunity.paragraph}</h3>

        <div>
          <div>
            <Image width={1000} height={1000} src={ourCommunity.img1} alt={''}/>
            <h4>{ourCommunity.section1Header}</h4>
            <p>{ourCommunity.section1Paragraph}</p>
          </div>
          <div>
            <Image width={1000} height={1000} src={ourCommunity.img1} alt={''}/>
            <h4>{ourCommunity.section2Header}</h4>
            <p>{ourCommunity.section2Paragraph}</p>
          </div>
        </div>

      </div>
  );
};

export default OurCommunities;
