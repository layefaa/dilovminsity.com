import React from 'react';
import {IButton} from "@/interfaces";


const Button = ({label, onClick, type = 'button', active}: IButton) => {
  switch (type) {
    case 'button':
      return (
          <button onClick={onClick}
                  className={`px-[1.6rem] py-[1rem] font-[400] text-14  relative group font-bold overflow-hidden text-dm-primary-black bg-dm-primary-green inline-flex rounded-[5px] items-center`}>
        <span
            className="absolute top-0 left-0 mb-0 flex h-full w-0 translate-x-0 transform transition-all duration-500 ease-out bg-ce-secondary-white group-hover:w-full"></span>
            <span className="relative group-hover:text-dm-primary-black"> {label}</span>
          </button>
      )
    // case 'tab':
    //   return (
    //       <button
    //           className={`${active ? 'bg-ce-secondary-white text-ce-primary-black' : 'bg-transparent text-ce-secondary-white'} px-[1.6rem] py-[1rem] font-[400] text-14  transition-all duration-500 ease-in text-16 font-[500]`}
    //           onClick={onClick}
    //       >
    //         {label}
    //       </button>
    //   )
    case 'submit':
      return (
          <button onClick={onClick}
                  className={`px-[1.6rem] py-[1rem] text-14  relative transition-all duration-500 ease-out font-[500]  group overflow-hidden bg-dm-primary-green hover: text-dm-primary-black inline-flex rounded-[5px] items-center`}>
            <span> {label}</span>


          </button>
      );
    default:
      return null;
  }


};

export default Button;
