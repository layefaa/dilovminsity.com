import React from 'react';
import Link from 'next/link';
import {socials} from "@/constants";

const TwitterLink = ({strokeColor}: { strokeColor: string }) => {
  return (
      <Link href={socials.twitter} target="_blank">
        <svg width="20" height="20"
             className={`${strokeColor} cursor-pointer hover:stroke-[#1c9bef] hover:fill-[#1c9bef]`} viewBox="0 0 20 20"
             fill="none"
             xmlns="http://www.w3.org/2000/svg">
          <path
              d="M18.3334 3.34168C17.5001 3.75001 16.6834 3.91584 15.8334 4.16668C14.8992 3.11251 13.5142 3.05418 12.1834 3.55251C10.8526 4.05084 9.98092 5.26918 10.0001 6.66668V7.50001C7.29592 7.56918 4.88758 6.33751 3.33341 4.16668C3.33341 4.16668 -0.151586 10.3608 6.66675 13.3333C5.10675 14.3725 3.55091 15.0733 1.66675 15C4.42341 16.5025 7.42758 17.0192 10.0284 16.2642C13.0117 15.3975 15.4634 13.1617 16.4042 9.81251C16.6849 8.7939 16.8243 7.74156 16.8184 6.68501C16.8167 6.47751 18.0767 4.37501 18.3334 3.34084V3.34168Z"
              strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </Link>
  );
};

export default TwitterLink;
