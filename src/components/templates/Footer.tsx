'use client'

import {FooterLinksWithLogo} from "@/components/organisms";
import {Socials} from "@/components/molecules";

const Footer = () => {
  return (
      <footer
          className={`bg-dm-primary-black text-dm-primary-white containerPaddingX flex flex-col pt-[8rem] pb-[4rem] md:pt-[12rem] `}>
        <div className={'flex flex-col sm:flex-row sm:justify-between sm:items-center'}>
          <FooterLinksWithLogo/>
          <div className={'mt-[4rem] sm:mt-0'}>
            {/*<m.p initial="hidden"*/}
            {/*     whileInView="show"*/}
            {/*     variants={slideIn('spring', 0, .5)}*/}
            {/*     className={'text-ce-secondary-white mb-[1rem] md:mb-[2rem] text-18 font-[300] h-[4rem] py-[1rem] text-left md:text-right'}>*/}
            {/*  Follow*/}
            {/*</m.p>*/}
            <Socials strokeColor={'stroke-dm-primary-white'}/>
          </div>
          <p className={'text-14 -mt-4'}>
            All Rights Reserved.
          </p>

        </div>
      </footer>
  );
};

export default Footer;
