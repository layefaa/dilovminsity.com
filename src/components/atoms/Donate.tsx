'use client'
import React from 'react';
import {useMenuContext} from "@/context/MenuContext";
import {CeraPro} from "@/fonts";


const Donate = () => {
    const {isDonateOpen, toggleDonate} = useMenuContext()
    return (
        <div
            className={`filter fixed right-0 z-10 h-full overflow-y-scroll overflow-visible w-screen md:w-[50rem] pt-[7.5rem] md:py-[8rem] px-[3rem] ${isDonateOpen ? 'flex flex-col' : 'hidden'}`}>
            <div onClick={() => toggleDonate()} className={'flex  justify-end mb-24'}>
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="ion:close">
                        <path id="Vector"
                              d="M27.1819 24L36.0881 15.0937C36.5108 14.6718 36.7486 14.0992 36.7491 13.502C36.7496 12.9047 36.5129 12.3317 36.0909 11.9091C35.669 11.4864 35.0964 11.2486 34.4992 11.2481C33.9019 11.2476 33.3289 11.4843 32.9062 11.9062L24 20.8125L15.0937 11.9062C14.6711 11.4836 14.0978 11.2461 13.5 11.2461C12.9022 11.2461 12.3289 11.4836 11.9062 11.9062C11.4836 12.3289 11.2461 12.9022 11.2461 13.5C11.2461 14.0978 11.4836 14.6711 11.9062 15.0937L20.8125 24L11.9062 32.9062C11.4836 33.3289 11.2461 33.9022 11.2461 34.5C11.2461 35.0978 11.4836 35.6711 11.9062 36.0937C12.3289 36.5164 12.9022 36.7539 13.5 36.7539C14.0978 36.7539 14.6711 36.5164 15.0937 36.0937L24 27.1875L32.9062 36.0937C33.3289 36.5164 33.9022 36.7539 34.5 36.7539C35.0978 36.7539 35.6711 36.5164 36.0937 36.0937C36.5164 35.6711 36.7539 35.0978 36.7539 34.5C36.7539 33.9022 36.5164 33.3289 36.0937 32.9062L27.1819 24Z"
                              fill="white"/>
                    </g>
                </svg>

            </div>
            <div className={' flex flex-col gap-[3rem]'}>
                <h1 className={`${CeraPro.className} font-[700] text-[2.5rem]`}>Donate to our Cause</h1>

                <div className={'flex flex-col text-[1.5rem] gap-[1.5rem]'}>
                    <p className={'text-[2rem] text-dm-primary-green'}>Local Account</p>
                    <div className={'flex justify-between'}>
                        <p>Ac Bank</p>
                        <p> Sterling Bank</p>
                    </div>
                    <div className={'flex justify-between'}>
                        <p>Ac Name</p>
                        <p>Dilovministry International</p>
                    </div>
                    <div className={'flex justify-between'}>
                        <p>Ac Number NG</p>
                        <p className={'text-dm-primary-blue'}>
                            0092119791
                        </p>
                    </div>

                </div>
                <div className={'flex flex-col text-[1.5rem] gap-[1.5rem]'}>
                    <p className={'text-[2rem] text-dm-primary-green'}>International Account</p>
                    <div className={'flex flex-col text-[1.5rem] gap-[1rem]'}>
                        <h3 className={'text-[1.5rem] text-dm-primary-green'}>USD Transfer</h3>
                        <div className={'flex justify-between'}>
                            <p>Beneficiary Bank Name</p>
                            <p>Sterling Bank</p>
                        </div>
                        <div className={'flex justify-between'}>
                            <p>Beneficiary Bank Account Number</p>
                            <p className={'text-dm-primary-blue'}>36145519</p>
                        </div>
                        <div className={'flex justify-between'}>
                            <p>Bank Swift Code</p>
                            <p className={'text-dm-primary-blue'}>NAMENGLA</p>
                        </div>
                        <div className={'flex justify-between'}>
                            <p>Correspondent Bank Name</p>
                            <p>Citibank N.A. New York</p>
                        </div>
                        <div className={'flex justify-between'}>
                            <p>Correspondent Bank Routing Number</p>
                            <p className={'text-dm-primary-blue'}>02100089</p>
                        </div>
                        <div className={'flex justify-between'}>
                            <p>Correspondent Bank Swift Code</p>
                            <p className={'text-dm-primary-blue'}>CITIUS33</p>
                        </div>
                    </div>
                    <div className={'flex flex-col text-[1.5rem] gap-[1rem]'}>
                        <h3 className={'text-[1.5rem] text-dm-primary-green'}>GBP Transfer</h3>
                        <div className={'flex justify-between'}>
                            <p>Beneficiary Bank Name</p>
                            <p>Sterling Bank</p>
                        </div>
                        <div className={'flex justify-between'}>
                            <p>Beneficiary Bank IBAN Number</p>
                            <p className={'text-dm-primary-blue'}>GB45 CITI 1850 0805529859</p>
                        </div>
                        <div className={'flex justify-between'}>
                            <p>Bank Swift Code</p>
                            <p className={'text-dm-primary-blue'}>NAMENGLA</p>
                        </div>
                        <div className={'flex justify-between'}>
                            <p>Correspondent Bank Name</p>
                            <p>Citibank London</p>
                        </div>
                        <div className={'flex justify-between'}>
                            <p>Correspondent Bank Sort Code</p>
                            <p className={'text-dm-primary-blue'}>18 50 08</p>
                        </div>
                        <div className={'flex justify-between'}>
                            <p>Correspondent Bank Swift Code</p>
                            <p className={'text-dm-primary-blue'}>CITIGB2L</p>
                        </div>
                    </div>
                    <div className={'flex flex-col text-[1.5rem] gap-[1rem]'}>
                        <h3 className={'text-[1.5rem] text-dm-primary-green'}>EURO Transfer</h3>
                        <div className={'flex justify-between'}>
                            <p>Beneficiary Bank Name</p>
                            <p>Sterling Bank</p>
                        </div>
                        <div className={'flex justify-between'}>
                            <p>Beneficiary Bank IBAN Number</p>
                            <p className={'text-dm-primary-blue'}>GB45 CITI 1850 0808663106</p>
                        </div>
                        <div className={'flex justify-between'}>
                            <p>Bank Swift Code</p>
                            <p className={'text-dm-primary-blue'}>NAMENGLA</p>
                        </div>
                        <div className={'flex justify-between'}>
                            <p>Correspondent Bank Name</p>
                            <p>Citibank London</p>
                        </div>
                        <div className={'flex justify-between'}>
                            <p>Correspondent Bank Sort Code</p>
                            <p className={'text-dm-primary-blue'}>18 50 08</p>
                        </div>
                        <div className={'flex justify-between'}>
                            <p>Correspondent Bank Swift Code</p>
                            <p className={'text-dm-primary-blue'}>CITIGB2L</p>
                        </div>
                    </div>
                </div>

            </div>

        </div>


    );
};

export default Donate;
