'use client';

import { useState } from 'react';

type InputType = {
    icon?: React.ReactNode;
    type?: string;
    name: string;
    className?: string;
    placeholder?: string;
    value: string;
    setValue: (val: string) => void
}

export default function IconInput({ icon, type='text', name, className, placeholder, value, setValue }: InputType) {
   return (
      <div className={`${className} relative`}>
            <div className='absolute top-1/2 -translate-y-1/2 left-2'>
                {icon}
            </div>
            <input
                id={name}
                type={type}
                value={value}
                placeholder={placeholder}
                onChange={e => setValue(e.target.value)}
                className={`pl-[25px] w-full font-sans border-[2px] border-[#CCC] hover:border-custom-pink focus:border-custom-pink duration-300 transition-all rounded-[7px] outline-none text-gray-500 text-xl
                                    py-[5px] px-[10px]`}
            ></input>
      </div>
   );
}