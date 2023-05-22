'use client'
import React from 'react';
import Link from "next/link";
import {usePathname} from 'next/navigation';
// import {MorvaText} from "./index";
import {m} from "framer-motion";
import {childVariants} from "@/utils/motion";
import {ILink} from "@/interfaces"


const NavLinks = ({route, name,clickEvent}: ILink) => {
  const currentRoute = usePathname();

  return (
        <m.div variants={childVariants}>
          <Link
              onClick={clickEvent}
              className={`leading-[2.5rem] underline underline-offset-[1rem] hover:text-dm-primary-green text-24 ${currentRoute === route ? "text-dm-primary-green " : "text-dm-primary-white"}`}
              href={route}>
            {name}
          </Link>
        </m.div>
  );
};

export default NavLinks;
