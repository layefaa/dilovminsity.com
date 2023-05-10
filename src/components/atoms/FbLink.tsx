import React from 'react';
import {ISocialIcon} from "@/interfaces";

const FbLink = ({strokeColor}: ISocialIcon) => {
  return (
      <svg width="22" height="22" className={`${strokeColor} cursor-pointer  hover:stroke-[#1977f2] hover:fill-[#1977f2]`} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M5.83337 8.33333V11.6667H8.33337V17.5H11.6667V11.6667H14.1667L15 8.33333H11.6667V6.66667C11.6667 6.44565 11.7545 6.23369 11.9108 6.07741C12.0671 5.92113 12.279 5.83333 12.5 5.83333H15V2.5H12.5C11.395 2.5 10.3352 2.93899 9.55376 3.72039C8.77236 4.50179 8.33337 5.5616 8.33337 6.66667V8.33333H5.83337Z"
             strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>

  );
};

export default FbLink;
