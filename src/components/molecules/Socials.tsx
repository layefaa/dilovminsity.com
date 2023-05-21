'use client'
import {motion} from "framer-motion";
import {Whatsapp, Facebook} from "@/components/atoms";
import {ISocialIcon} from "@/interfaces";
import {slideIn} from "@/utils/motion";

const Socials = ({strokeColor, dir}: ISocialIcon) => {
  return (
      <motion.div initial="hidden"
                  whileInView="show"
                  variants={slideIn('spring', 0, .5, dir)} className={`flex w-fit gap-8`}>
        {/*<YoutubeLink strokeColor={strokeColor}/>*/}
        {/*<TwitterLink strokeColor={strokeColor}/>*/}
        {/*<FbLink strokeColor={strokeColor}/>*/}
        <Whatsapp strokeColor={strokeColor}/>
        {/*<TiktokLink strokeColor={strokeColor}/>*/}
        {/*<InstagramLink strokeColor={strokeColor}/>*/}
      </motion.div>
  );

};

export default Socials;
