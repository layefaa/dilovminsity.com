'use client'

import {FooterBar, FooterLogoWithDetails} from "@/components/organisms";
import {routes} from "@/constants";
import Link from "next/link";

const Footer = () => {
  return (
      <footer
          className={`bg-dm-primary-black text-dm-primary-white containerPaddingX flex flex-col pt-[8rem] pb-[4rem] md:pt-[12rem] `}>
        <div className={'flex flex-col sm:flex-row sm:justify-between sm:items-center'}>
          <FooterLogoWithDetails/>
          <div className={'flex gap-3'}>
            {
              routes.map((link,i)=> {
                return (
                    <Link
                        key={i}
                        className={`leading-[2.5rem] underline underline-offset-[1rem] hover:text-dm-primary-green text-24`}
                        href={link.route}>
                      {link.name}
                    </Link>
                )
              })
            }
          </div>
          {/*<div className={'mt-[4rem] sm:mt-0'}>*/}
          {/*  /!*<m.p initial="hidden"*!/*/}
          {/*  /!*     whileInView="show"*!/*/}
          {/*  /!*     variants={slideIn('spring', 0, .5)}*!/*/}
          {/*  /!*     className={'text-ce-secondary-white mb-[1rem] md:mb-[2rem] text-18 font-[300] h-[4rem] py-[1rem] text-left md:text-right'}>*!/*/}
          {/*  /!*  Follow*!/*/}
          {/*  /!*</m.p>*!/*/}
          {/*</div>*/}
        </div>
        <FooterBar/>
      </footer>
  );
};

export default Footer;
