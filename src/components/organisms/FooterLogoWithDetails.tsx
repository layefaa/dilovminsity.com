'use client'
import Link from "next/link";
import {Logo} from "@/components/atoms";
// import {FooterLinks} from "@/components/molecules";
import {m} from "framer-motion";
import {slideIn} from "@/utils/motion";
import {aboutDilov} from "@/constants";

const FooterLogoWithDetails = () => {
  return (
      <m.div initial="hidden"
             whileInView="show"
             variants={slideIn('spring', 0, .5)} className={'flex flex-col'}>
        <Link href={'/'} className={`relative h-[2rem] md:h-[3.5rem] aspect-[3.5] mb-[1rem] md:mb-[2rem]`}>
          <Logo/>
        </Link>
        <div className={`flex flex-col gap-y-[1.6rem] capitalize`}>
          <p>{aboutDilov.address}</p>
          <p>{aboutDilov.call_line}</p>
          <div>
            <p>Service Time:</p>
            <p>{aboutDilov.service_time}</p>
          </div>
        </div>
      </m.div>
  );
};

export default FooterLogoWithDetails;
