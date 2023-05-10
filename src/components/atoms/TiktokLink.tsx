import React from 'react';
import {ISocialIcon} from "@/interfaces";
// import Link from 'next/link';
// import {socials} from "@/constants";

const TiktokLink = ({strokeColor}: ISocialIcon) => {
  return (
      // <Link href={socials.tiktok} target="_blank">
      <svg width="20" height="20" className={`${strokeColor} cursor-pointer hover:stroke-[#EE1D52]`} viewBox="0 0 20 20"
           xmlns="http://www.w3.org/2000/svg">
        {/*<defs>*/}
        {/*  <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">*/}
        {/*    <stop offset="0%" stop-color="#69C9D0"></stop>*/}
        {/*    <stop offset="50%" stop-color="#EE1D52"></stop>*/}
        {/*    <stop offset="100%" stop-color="#FCEED5"></stop>*/}
        {/*  </linearGradient>*/}
        {/*</defs>*/}
        <path

            d="M7.49996 9.99992C6.84069 9.99992 6.19622 10.1954 5.64806 10.5617C5.0999 10.928 4.67265 11.4486 4.42036 12.0576C4.16807 12.6667 4.10206 13.3369 4.23068 13.9836C4.35929 14.6302 4.67676 15.2241 5.14294 15.6903C5.60911 16.1564 6.20306 16.4739 6.84966 16.6025C7.49626 16.7312 8.16649 16.6651 8.77557 16.4129C9.38466 16.1606 9.90525 15.7333 10.2715 15.1852C10.6378 14.637 10.8333 13.9925 10.8333 13.3333V3.33325C10.8333 4.43832 11.2723 5.49813 12.0537 6.27953C12.8351 7.06093 13.8949 7.49992 15 7.49992"
            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      // </Link>
  );
};

export default TiktokLink;
