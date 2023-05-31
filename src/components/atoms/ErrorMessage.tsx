'use client'
import {m} from 'framer-motion'
import {framerError} from "@/utils/motion";
import {MdError} from 'react-icons/md'

const ErrorMessage = ({error}: { error: string }) => {
  return (
      <m.span
          {...framerError}
          className="flex items-center gap-1 rounded-md px-2 pb-3 font-semibold text-red-500 filter text-[1.2rem]">
        <MdError/>

        {error}
      </m.span>
  );
};

export default ErrorMessage;
