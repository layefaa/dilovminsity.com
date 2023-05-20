import React from 'react';
import {footerRoutes} from "@/constants";
import {FooterLink} from "@/components/atoms";

const FooterLinks = () => {
  return (

      <div className={'flex gap-8  flex-row items-center justify-between'}>
        {footerRoutes.map((r, index) => (
            <FooterLink key={index} name={r.name} route={r.route}/>
        ))}
      </div>
  );
};

export default FooterLinks;

