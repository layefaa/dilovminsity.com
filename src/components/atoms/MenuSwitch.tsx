'use client'
import {useMenuContext} from "@/context/MenuContext";

const MenuSwitch = () => {
  const {isOpen} = useMenuContext()
  return (
      <>
        {
          (!isOpen) ? <svg width="14" height="12" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1H15" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M1 7H15" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
              </svg> :
              <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 14L11.8995 4.10051" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M2 4L11.8995 13.8995" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>

        }
      </>
  );
};

export default MenuSwitch;
