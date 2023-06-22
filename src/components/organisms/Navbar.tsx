'use client'
import {styles} from "@/styles";
import {Logo, MenuSwitch, NavAction} from "@/components/atoms";
import {Menu} from "@/components/molecules";
import Link from "next/link";
import {m} from 'framer-motion';
import {navVariants} from "@/utils/motion";
import {GiReceiveMoney} from "react-icons/gi";
import {AiFillPlayCircle} from "react-icons/ai";
import {useMenuContext} from "@/context/MenuContext";


const Navbar = () => {
  const {toggleMenu, toggleDonate} = useMenuContext()
  return (
      <m.nav
          variants={navVariants}
          initial="hidden"
          whileInView="show"
          viewport={{once: true}}
          className={`${styles.flexBetweenCenter} px-24 sm:px-40 md:px-48 lg:px-80 text-dm-primary-white filter w-full z-20 fixed h-[4.5rem] md:h-[8rem] top-0 `}>
        <div className={`w-[30%] flex gap-5`}>
          <NavAction label={'Menu'} clickEvent={() => toggleMenu()}>
            <MenuSwitch/>
          </NavAction>
        </div>
        <div className={`w-[40%] flex justify-center`}>
          <Link href={'/'} className={`relative h-[3rem] md:h-[5rem] aspect-[3] md:aspect-[3.5] `}>
            <Logo/>
          </Link>
        </div>
        <div className={`w-[30%] justify-end flex gap-5 `}>
          <NavAction clickEvent={() => toggleDonate()} label={'Donate'}>
            <GiReceiveMoney/>
          </NavAction>
          <div className={'hidden md:block'}>
            <NavAction label={'Watch'}>
              <AiFillPlayCircle/>
            </NavAction>
          </div>

        </div>
      </m.nav>
  );
};

export default Navbar;
