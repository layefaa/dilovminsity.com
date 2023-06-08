import React from 'react';
import {CeraPro} from "@/fonts";
import {volunteering_ops, volunteering_service} from "@/constants/content";

const MyComponent = () => {
  return (
      <div className={'defaultContentContainer'}>
        <h2 className={`defaultHeader ${CeraPro.className} `}>{volunteering_service.header}</h2>
        <p className={`defaultSectionParagraph mb-[1.5rem]  md:mb-[3rem] `}>{volunteering_service.paragraph}</p>
      </div>
  );
};

export default MyComponent;
