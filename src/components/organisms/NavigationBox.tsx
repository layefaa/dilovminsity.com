'use client'
import React from 'react';
import {useMenuContext} from "@/context/MenuContext";
import {AnimatePresence, m} from "framer-motion";
import {childVariants, navBoxVariants, parentVariants} from "@/utils/motion";
import {Links} from "@/components/molecules";
import {Button} from "@/components/atoms";
// import {MorvaText} from "@/components/atoms";
// import {cateyes_email, menuHeader, menuSubHeader, phone} from "@/constants";


const NavigationBox = () => {
  const {isOpen} = useMenuContext()


  return (
      // <div>
      <AnimatePresence>
        {isOpen && (
            <m.div
                initial="closed"
                animate="open"
                exit="closed"
                variants={navBoxVariants}
                className={`filter fixed z-10 h-screen w-screen pt-[7.5rem] md:pt-[8rem] containerPaddingX ${isOpen ? 'flex flex-col' : 'hidden'}`}>
              <div className={'h-[55%] pt-[20%] md:px-[8rem] md:pt-0 md:h-[50%] md:flex md:items-centers'}>
                <Links/>
              </div>
              <m.div
                  variants={parentVariants(1)}
                  className={`h-[45%] pt-[25%] md:h-[50%] md:pt-[5%] text-12 md:text-20 flex flex-col items-center md:justify-start`}>
                <m.p
                    variants={childVariants}
                    className={`text-20 sm:text-24 md:text-32 `}>
                  {/*{menuHeader}*/}
                  Uphold God's standard and precepts with Dilovministry!
                </m.p>
                <m.p
                    variants={childVariants}
                    className={'font-light py-10 md:py-28 '}>
                  {/*{menuSubHeader}*/}
                  Spread the gospel of Truth, Love, and Hope to all!

                </m.p>
                <m.div
                    variants={childVariants}
                    className={`text-center text-ce-secondary-white font-semibold  pb-10 md:pb-28`}>
                  <p>
                    dilominstry@mail
                    {/*{email}*/}
                  </p>
                  <p className={`mt-4 md:mt-6`}>
                    {/*{phone}*/}
                    070568423457
                  </p>
                </m.div>
                <m.div
                    variants={childVariants}
                >
                  <Button label={'Send Us a Message'} type={'button'}/>

                  {/*<ContactUsButton/>*/}
                </m.div>

              </m.div>
            </m.div>
        )}
      </AnimatePresence>

  );
};

export default NavigationBox;
