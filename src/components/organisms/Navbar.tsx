'use client'
import styles from "@/styles";
import {Logo} from "@/components/atoms";
import {Menu} from "@/components/molecules";
// import {FollowEffect} from "@/components/organisms";
import Link from "next/link";
import {m} from 'framer-motion';
import {navVariants} from "@/utils/motion";


const Navbar = () => {
  return (
      <m.nav
          variants={navVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className={`${styles.flexBetweenCenter}  ${styles.containerPaddingX} filter text-ce-secondary-white bg-blue-500 text-14 font-semibold  w-screen z-20 fixed h-[4.5rem] md:h-[5rem] top-0`}>
        <div className={`w-[30%]`}>
          {/*<FollowEffect/>*/}
        </div>
        <Link href={'/'} className={`relative w-[8rem] h-[4rem] md:w-[32.3rem] md:h-[8rem]`}>
          <Logo/>
        </Link>
        <div className={`w-[30%] flex justify-end`}>
          <Menu/>
        </div>

      </m.nav>
  );
};

export default Navbar;
