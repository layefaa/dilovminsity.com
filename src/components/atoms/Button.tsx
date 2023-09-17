import React from 'react';
import {IButton} from "@/interfaces";
import {AiOutlineCheck, AiOutlineLoading3Quarters} from "react-icons/all";
import {MdError} from "react-icons/md";


const Button = ({label, onClick, type = 'button',isError,isLoading,isSuccess, active}: IButton) => {
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
                  className={` text-14  relative transition-all duration-500 ease-out font-[500]  group overflow-hidden bg-dm-primary-green hover: text-dm-primary-black inline-flex rounded-[5px] items-center`}>
              {
                  !isLoading ?
                      <div
                          className={`px-[1.6rem] py-[1rem]  w-full h-full relative transition-all ease-out rounded group overflow-hidden bg-ce-secondary-white hover:bg-ce-tertiary-white text-ce-primary-black inline-flex items-center`}>
                          <span> {label}</span>
                          <svg width="13" height="10" viewBox="0 0 13 10"
                               className={'relative ml-[1rem] fill-ce-primary-black'}
                               xmlns="http://www.w3.org/2000/svg">
                              <path
                                  d="M12.4756 5.42799C12.712 5.19162 12.712 4.80838 12.4756 4.57201L8.62373 0.720143C8.38736 0.483773 8.00413 0.483773 7.76776 0.720143C7.53139 0.956513 7.53139 1.33974 7.76776 1.57611L11.1916 5L7.76776 8.42389C7.53139 8.66026 7.53139 9.04349 7.76776 9.27986C8.00413 9.51623 8.38736 9.51623 8.62373 9.27986L12.4756 5.42799ZM0 5.60526H12.0476V4.39474H0L0 5.60526Z"/>
                          </svg>
                      </div> :
                      isSuccess
                          ?
                          <div className={'px-[1.6rem] py-[1rem] h-full w-36 bg-green-500 rounded flex justify-center items-center'}>
                              {/* eslint-disable-next-line react/jsx-no-undef */}
                              <AiOutlineCheck color={'white'}/>
                          </div>

                          :
                          isError
                              ? <div className={'px-[1.6rem] py-[1rem] h-full w-36 bg-red-500 rounded flex justify-center items-center'}>
                                  <MdError color={'white'}/>
                              </div>
                              :
                              <div className={'px-[1.6rem] py-[1rem] h-full w-36 bg-blue-500 rounded flex justify-center items-center'}>
                                  <div className={'animate-spin'}>
                                      <AiOutlineLoading3Quarters color={'white'}/>
                                  </div>
                              </div>

              }
          </button>
      );
    default:
      return null;
  }


};

export default Button;
