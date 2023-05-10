import React from 'react';
import {ISocialIcon} from "@/interfaces";
import {socials} from "@/constants";
import Link from 'next/link';

const YoutubeLink = ({strokeColor}: ISocialIcon) => {

  return (
      <Link href={socials.youtube} target="_blank">
        <svg width="22" className={`group/yt cursor-pointer hover:stroke-[#ff0000] hover:fill-[#ff0000]`}
             height="22"
             viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
              className={`${strokeColor} group-hover/yt:stroke-[#ff0000] group-hover/yt:fill-[#ff0000]`}
              d="M14.1667 4.16675H5.83333C3.99238 4.16675 2.5 5.65913 2.5 7.50008V12.5001C2.5 14.341 3.99238 15.8334 5.83333 15.8334H14.1667C16.0076 15.8334 17.5 14.341 17.5 12.5001V7.50008C17.5 5.65913 16.0076 4.16675 14.1667 4.16675Z"
              strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8.33325 7.5L12.4999 10L8.33325 12.5V7.5Z"
                className={`${strokeColor} group-hover/yt:stroke-white group-hover/yt:fill-white`} strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"/>
        </svg>
      </Link>

  );
};

export default YoutubeLink;
