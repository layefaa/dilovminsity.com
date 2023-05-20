'use client'
import {ErrorMessage, Label} from "@/components/atoms";
import {IInput} from "@/interfaces";
import styles from "@/styles";
import {useFormContext} from "react-hook-form";
import {findInputError} from "@/utils/findInputError";
import {isFormInvalid} from "@/utils/isFormInvalid";
import {AnimatePresence} from "framer-motion";


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
                  className={`${styles.inputStyle} h-[12rem]`} placeholder={placeholder}/>
              :
              <input placeholder={placeholder} type={type}
                     className={` ${styles.inputStyle}`}
                     {...register(id, validation)}
              />
        }
      </div>
  );
};

export default InputField;
