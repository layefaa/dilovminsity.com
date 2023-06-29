'use client'
import React from 'react';
import {m} from "framer-motion";
import {childVariants2, fadeIn, parentVariants2} from "@/utils/motion";
import {ContactUsForm} from "@/components/organisms";
import {CeraPro} from "@/fonts";
import {contactUs} from "@/constants/content";

const ContactUs = () => {
  return (
      <div className={`mt-[4rem] lg:mt-[12rem] h-full flex flex-col lg:flex-row px-24 sm:px-40 md:px-48 lg:px-80`}>
        <m.div initial={'closed'}
               whileInView={'open'}
               viewport={{once: true}}
               variants={parentVariants2(1)}
               className={'mt-0 lg:mt-[4rem] pr-0 lg:pr-20 xl:pr-80 lg:w-2/5 2xl:w-1/2'}>
          <m.h1 variants={childVariants2}
                className={`
               defaultHeader ${CeraPro.className}
                leading-[165%]`}>
            {contactUs.header1}
          </m.h1>
          <m.h3 variants={childVariants2}
                className={`
              defaultHeaderParagraph
                mb-[4rem] `}>
            {contactUs.header2}
          </m.h3>
          <m.p variants={childVariants2}
               className={`
             ${CeraPro.className} 
             defaultSectionParagraph
                mb-[4rem]
                  `}>
            {contactUs.paragraph}
          </m.p>

        </m.div>
        <m.div initial="hidden"
               whileInView="show"
               viewport={{once: true}}
               variants={fadeIn('left', 'tween', 1.4, .5)}
               className={'w-full lg:w-3/5 2xl:w-1/2'}>
          <ContactUsForm/>
        </m.div>
      </div>
  );
};

export default ContactUs;
