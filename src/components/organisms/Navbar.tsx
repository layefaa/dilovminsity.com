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
          viewport={{once: true}}
          className={`${styles.flexBetweenCenter} text-dm-primary-white filter w-full z-20 fixed h-[4.5rem] md:h-[8rem] top-0 ${styles.containerPaddingX}`}>
        <div className={`w-[30%] flex gap-5`}>
          <Menu/>
          <p>Watch</p>
        </div>
        <div className={`w-[40%] flex justify-center`}>
          <Link href={'/'} className={`relative h-[2rem] md:h-[6rem] aspect-[3] `}>
            <Logo/>
          </Link>
        </div>
        <div className={`w-[30%] justify-end flex `}>
          <p>Watch</p>
          <p>Sign In</p>
        </div>

      </m.nav>
  );
};

export default Navbar;
