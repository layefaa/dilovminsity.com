'use client'
import styles from "@/styles";
import {Button} from "@/components/atoms";

const Footer = () => {
  return (
      <footer
          className={`bg-dm-primary-black text-dm-primary-white ${styles.containerPaddingX} flex flex-col pt-[8rem] pb-[4rem] md:pt-[12rem] `}>
        <div>
          <Button label={'test'} type={'button'}/>
        </div>
      </footer>
  );
};

export default Footer;
