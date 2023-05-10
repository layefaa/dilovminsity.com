'use client'
import React from 'react';
import Link from "next/link";
import {usePathname} from 'next/navigation';
// import {MorvaText} from "./index";
// import {m} from "framer-motion";
// import {childVariants} from "@/utils/motion";
import {ILink} from "@/interfaces"


const NavLinks = ({route, name,clickEvent}: ILink) => {
  const currentRoute = usePathname();

  return (
        <div>
          <Link
              onClick={clickEvent}
              className={`leading-[2.5rem] hover:text-bb-tertiary-black text-32 md:text-36 lg:text-48 ${currentRoute === route ? "text-bb-primary-black " : "text-ce-tertiary-white"}`}
              href={route}>
            {name}
          </Link>
        </div>
  );
};

export default NavLinks;
