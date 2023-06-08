'use client'
import React, {useState} from 'react';
import {CeraPro} from "@/fonts";
import {partnerForm} from "@/constants/content";
import {Input} from "@/components/molecules";
import {email_validation, text_validation} from "@/utils/inputValidation";
import {Button} from "@/components/atoms";
import {FieldValues, FormProvider, useForm} from "react-hook-form";

const PartnerForm = () => {
  const [isLoading, setLoading] = useState(false)
  const [isSuccess, setSuccess] = useState(false)
  const [isError, setError] = useState(false)
  const sendMail = async (data: FieldValues) => {
    const res = await fetch('/api/mail',
        {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(data)
        })
    console.log(res.status)
    return res;
  }

  const methods = useForm()

  const onSubmit = methods.handleSubmit(data => {
    setLoading(true)
    sendMail(data)
        .then(
            (res) => {
              if (res.status === 200) {
                setSuccess(true)
              }
              if (res.status === 500) {
                setError(true)
              }
            })
        .finally(() => {
          setTimeout(() => {
            setLoading(false)
            setSuccess(false)
            setError(false)
            methods.reset()
          }, 1000)
        })
  })
  return (
      <div className={'defaultContentContainer  -mt-[5rem] md:-mt-[10rem]'}>
        <h2 className={` ${CeraPro.className} text-[2rem] `}>{partnerForm.header}</h2>
        {/*<div className={'flex flex-col md:flex-row text-left px-0 gap-[3rem] '}>*/}
        {/*  <div className={'w-full md:w-1/2'}>*/}
        {/*    <div className={'relative  w-full aspect-[1.5] mb-[4rem]'}>*/}
        {/*      <Image fill src={ourCommunity.img1} alt={''}/>*/}
        {/*    </div>*/}

        {/*    <h4 className={`defaultSectionHeader ${CeraPro.className}`}>{ourCommunity.section1Header}</h4>*/}
        {/*    <p className={'defaultSectionParagraph'}>{ourCommunity.section1Paragraph}</p>*/}
        {/*  </div>*/}
        {/*  <div className={'w-full md:w-1/2'}>*/}
        {/*    <div className={'relative  w-full aspect-[1.5] mb-[4rem]'}>*/}
        {/*      <Image fill src={ourCommunity.img2} alt={''}/>*/}
        {/*    </div>*/}
        {/*    <h4 className={`defaultSectionHeader ${CeraPro.className}`}>{ourCommunity.section2Header}</h4>*/}
        {/*    <p className={'defaultSectionParagraph'}>{ourCommunity.section2Paragraph}</p>*/}
        {/*  </div>*/}
        {/*</div>*/}

        <div>
          <FormProvider {...methods}>
            <form
                onSubmit={e => e.preventDefault()}
                noValidate
                className={`w-full h-fit flex flex-col rounded-2xl p-[2rem] md:p-[4rem] xl:p-[6rem]`}>
              <div className={'flex lg:gap-[6rem] flex-col lg:flex-row justify-between'}>
                <Input label={'name'} id={'first_name'} name={'first_name'} placeholder={'e.g John'}
                       type={'text'}
                       validation={text_validation}/>
                <Input label={'email'} id={'email'} name={'email'} placeholder={'e.g johndoe@mail.com'} type={'email'}
                       validation={email_validation}/>
              </div>
              <div className={'flex lg:gap-[6rem] flex-col lg:flex-row justify-between'}>
                <Input label={'Organization Name'} id={'first_name'} name={'first_name'} placeholder={'e.g WIllman Ventures'}
                       type={'text'}
                       validation={text_validation}/>
                <Input label={'website'} id={'email'} name={'email'} placeholder={'e.g https://www.willberns.org'} type={'email'}
                       validation={email_validation}/>
              </div>
              <div className={'flex lg:gap-[6rem] flex-col lg:flex-row justify-between'}>
                <Input label={'Address'} id={'first_name'} name={'first_name'} placeholder={'e.g Suite 4, Cleave Cl. Ikoyi, Lagos.'}
                       type={'text'}
                       validation={text_validation}/>
                <Input label={'Phone'} id={'email'} name={'email'} placeholder={'e.g +2348096555554'} type={'email'}
                       validation={email_validation}/>
              </div>
              <div className={'flex lg:gap-[6rem] flex-col lg:flex-row justify-between'}>
                <Input label={'Partnership Type'} id={'first_name'} name={'first_name'} placeholder={'e.g Types'}
                       type={'text'}
                       validation={text_validation}/>
              </div>


              <div className={'flex w-full justify-center mt-[2rem]'}>
                <Button onClick={onSubmit} label={'Submit'} type={'submit'} isLoading={isLoading} isSuccess={isSuccess}
                        isError={isError}/>
              </div>
            </form>
          </FormProvider>
        </div>

      </div>
  );
};

export default PartnerForm;
