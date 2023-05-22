'use client'
import Link from "next/link";
import {Logo} from "@/components/atoms";
// import {FooterLinks} from "@/components/molecules";
import {m} from "framer-motion";
import {slideIn} from "@/utils/motion";

const FooterLinksWithLogo = () => {
  return (
      <m.div initial="hidden"
                  whileInView="show"
                  variants={slideIn('spring', 0, .5)} className={'flex flex-col'}>
        <Link href={'/'} className={`relative h-[2rem] md:h-[3.5rem] aspect-[3.5] mb-[1rem] md:mb-[2rem]`}>
          <Logo/>
        </Link>
        {/*<div className={`w-fit`}><FooterLinks/></div>*/}
      </m.div>
  );
};

export default FooterLinksWithLogo;
