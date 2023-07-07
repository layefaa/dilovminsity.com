'use client'
import React, {useState} from 'react';
import {CeraPro} from "@/fonts";
import {partnerForm} from "@/constants/content";
import {Input, Select} from "@/components/molecules";
import {
    email_validation,
    not_email_validation,
    phone_validation,
    text_validation,
    web_validation
} from "@/utils/inputValidation";
import {Button} from "@/components/atoms";
import {FieldValues, FormProvider, useForm} from "react-hook-form";
import {partnerOptions} from "@/constants";

const PartnerForm = () => {
  const [isLoading, setLoading] = useState(false)
  const [isSuccess, setSuccess] = useState(false)
  const [isError, setError] = useState(false)
  const sendMail = async (data: FieldValues) => {
    const res = await fetch('/api/partner',
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
        <div>
          <FormProvider {...methods}>
            <form
                onSubmit={e => e.preventDefault()}
                noValidate
                className={`w-full h-fit flex flex-col rounded-2xl p-[2rem] md:p-[4rem] xl:p-[6rem]`}>
              <div className={'flex lg:gap-[6rem] flex-col lg:flex-row justify-between'}>
                <Input label={'name'} id={'name'} name={'name'} placeholder={'e.g John'}
                       type={'text'}
                       validation={text_validation}/>
                <Input label={'email'} id={'email'} name={'email'} placeholder={'e.g johndoe@mail.com'} type={'email'}
                       validation={not_email_validation}/>
              </div>
              <div className={'flex lg:gap-[6rem] flex-col lg:flex-row justify-between'}>
                <Input label={'organization name'} id={'organization'} name={'organization'}
                       placeholder={'e.g WIllman Ventures'}
                       type={'text'}
                       validation={text_validation}/>
                <Input label={'website'} id={'website'} name={'website'} placeholder={'e.g https://www.willberns.org'}
                       type={'text'}
                       validation={web_validation}/>
              </div>
              <div className={'flex lg:gap-[6rem] flex-col lg:flex-row justify-between'}>
                <Input label={'address'} id={'address'} name={'address'}
                       placeholder={'e.g Suite 4, Cleave Cl. Ikoyi, Lagos.'}
                       type={'text'}
                   />
                <Input label={'phone'} id={'phone'} name={'phone'} placeholder={'e.g +2348096555554'} type={'text'}
                       validation={phone_validation}/>
              </div>
              <div className={'flex lg:gap-[6rem] flex-col lg:flex-row justify-between'}>
                <Select label={'partnership type'} id={'type'} name={'type'} placeholder={'Select a Type'}
                        type={'text'}
                        options={partnerOptions}
                        validation={text_validation}/>
                <Input label={'Other'} id={'other'} name={'other'}
                       placeholder={'Please Specify'}
                       type={'text'}
                       disabled={(methods.watch('type') !== 'Other')}
                       validation={(methods.watch('type') === 'Other' ? text_validation : {})}
                />
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
