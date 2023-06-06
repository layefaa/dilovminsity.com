'use client'
import {ErrorMessage, Label} from "@/components/atoms";
import {IInput} from "@/interfaces";
import {styles}from "@/styles";
import {useFormContext} from "react-hook-form";
import {findInputError} from "@/utils/findInputError";
import {isFormInvalid} from "@/utils/isFormInvalid";
import {AnimatePresence} from "framer-motion";

const inputStyle = 'px-[1.6rem] py-[1rem] font-[400] text-16 placeholder:text-16 placeholder:text-dm-tertiary-white2 rounded-lg outline-none relative bg-transparent overflow-hidden  text-dm-secondary-white border-ce-tertiary-white border-dm-tertiary-white2 border inline-flex rounded-[5px]'

const InputField = ({label, type, placeholder, validation, multiline, id}: IInput) => {
  const {
    register,
    formState: {errors},
  } = useFormContext()

  const inputError = findInputError(errors, id)
  const isInvalid = isFormInvalid(inputError)

  // @ts-ignore
  return (
      <div className={'mb-[1.5rem] sm:mb-[2rem] lg:mb-[3rem] flex flex-col w-full'}>
        <div className={'flex justify-between items-center'}>
          <Label label={label}/>
          <AnimatePresence mode="wait" initial={false}>
            {isInvalid && (
                <ErrorMessage
                    // @ts-ignore
                    error={inputError.error.message}
                    // @ts-ignore
                    key={inputError.error.message}
                />
            )}
          </AnimatePresence>
        </div>
        {
          (multiline) ?
              <textarea
                  {...register(id, validation)}
                  className={`${inputStyle} h-[12rem]`} placeholder={placeholder}/>
              :
              <input placeholder={placeholder} type={type}
                     className={` ${inputStyle}`}
                     {...register(id, validation)}
              />
        }
      </div>
  );
};

export default InputField;
