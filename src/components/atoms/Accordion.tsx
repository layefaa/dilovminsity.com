'use client'
import {useState} from "react";
import {MdOutlineKeyboardArrowUp} from "react-icons/all";

const Accordion = ({children, header}: { children: string, header: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
      <div className={'text-left mb-[4rem] cursor-pointer '} onClick={() => setIsOpen(!isOpen)}>
        <div className={'flex justify-between'}>
          <h2 className={'text-20 mb-[2rem]  font-[500] '} >{header}</h2>
          <div className={!isOpen ? 'rotate-180' : 'rotate-0'}>
            <MdOutlineKeyboardArrowUp/>
          </div>

        </div>

        <div
            className={'defaultSectionParagraphDark'}
            style={{
              display: isOpen ? "block" : "none",
            }}
        >
          {children}
        </div>
      </div>
  );
};

export default Accordion;