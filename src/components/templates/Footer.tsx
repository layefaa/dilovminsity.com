'use client'

import {FooterBar, FooterLogoWithDetails} from "@/components/organisms";
import {routes} from "@/constants";
import Link from "next/link";
import {CabinetGrotesk} from "@/fonts";

const Footer = () => {
  return (
      <footer
          className={`bg-dm-primary-black text-dm-primary-white containerPaddingX flex flex-col pt-[4rem] pb-[4rem] md:pt-[7rem]  ${CabinetGrotesk.className}`}>
        <div className={'flex flex-col  md:flex-row justify-between sm:items-center'}>
          <FooterLogoWithDetails/>
          <div className={'pt-[3rem] md:pt-0 md:w-2/3'}>
            <p className={'mb-[2rem] pt-[1rem] md:mb-[4rem]'}>Links</p>
            <div className={'flex flex-col md:flex-row gap-[2rem] md:justify-between md:items-center'}>

              {
                routes.map((link, i) => {
                  return (
                      <Link
                          key={i}
                          className={`leading-[2.5rem] underline underline-offset-[1rem] hover:text-dm-primary-green text-20 md:text-24`}
                          href={link.route}>
                        {link.name}
                      </Link>
                  )
                })
              }
            </div>
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
        <hr className={'my-[4rem] border-red-50'}/>
        <FooterBar/>
      </footer>
  );
};

export default Footer;
