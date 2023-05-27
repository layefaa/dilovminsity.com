'use client'
import {motion} from "framer-motion";
import {Facebook, Instagram, Whatsapp} from "@/components/atoms";
import {ISocialIcon} from "@/interfaces";
import {slideIn} from "@/utils/motion";

const Socials = ({dir}: ISocialIcon) => {
  return (
      <motion.div initial="hidden"
                  whileInView="show"
                  variants={slideIn('spring', 0, .5, dir)} className={`flex justify-center w-full gap-8`}>

        <Whatsapp/>
        <Facebook/>
        <Instagram/>
      </motion.div>
  );

};

export default Socials;
