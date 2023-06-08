'use client'
import {useState} from "react";
import {MdOutlineKeyboardArrowUp} from "react-icons/all";

const Accordion = ({children, header}: { children: string, header: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
      <div className={'text-left mb-[4rem] cursor-pointer '}>
        <div className={'flex justify-between'}>
          <h2 className={'text-20 mb-[2rem] text-dm-primary-white font-[500]'} onClick={() => setIsOpen(!isOpen)}>{header}</h2>
          <div className={!isOpen ? 'rotate-180' : 'rotate-0'}>
            <MdOutlineKeyboardArrowUp/>
          </div>

        </div>

        <div
            className={'text-dm-secondary-white'}
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