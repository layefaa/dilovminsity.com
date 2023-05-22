'use client'
import React from 'react';
import Link from "next/link";

interface Link {
  name: string,
  route: string
}

const FooterLinks = ({route, name}: Link) => {

  return (
      <Link
          className={`hover:text-ce-secondary-white text-14 md:text-16 font-normal underline text-ce-tertiary-white pb-6`}
          href={route}>
        {name}
      </Link>
  );
};

export default FooterLinks;
