import React from 'react';
import {CabinetGrotesk, CeraPro} from "@/fonts";
import Link from "next/link";
import {faqs} from "@/constants/content";
import {Accordion} from "@/components/atoms";

const FAQs = () => {
  return (
      <div className={'defaultContentContainer'}>
        <h1 className={`text-40 leading-[100%] font-bold ${CabinetGrotesk.className} `}>Frequently Asked
          Questions</h1>
        <p className={`${CeraPro.className}`}>Can’t find answers here ? <span className={'text-dm-primary-green'}><Link
            href={'/contact'}>Contact Us</Link></span></p>
        <div>
          {faqs.map((f, i) => {
            return (
                <Accordion key={i} header={f.Q}>
                  {f.A}
                </Accordion>
            )
          })}
        </div>
        <div>
          <p className={`text-40 leading-[100%] font-bold ${CabinetGrotesk.className}`}>
            If you have any questions or would like to learn more about our volunteer program, please contact our
            volunteer coordinator at <span className={'text-dm-primary-green'}>
               volunteers@dilovministry.org.
            </span>
          </p>
        </div>
      </div>
  );
};

export default FAQs;
