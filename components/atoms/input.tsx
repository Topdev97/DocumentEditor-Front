'use client';

import React from 'react';

type CommonProps = {
    label?: string;
    name: string;
    className?: string;
    placeholder?: string;
};

type TextInputProps = CommonProps & {
    type: 'text' | 'password' | 'email' | 'input';
    value: string;
    setValue: (val: string) => void;
};

type CheckboxInputProps = CommonProps & {
    type: 'checkbox';
    value: boolean;
    setValue: React.Dispatch<React.SetStateAction<boolean>>;
};

type InputType = TextInputProps | CheckboxInputProps;

const Input: React.FC<InputType> = (props) => {
    const { label, type, name, className = '', placeholder } = props;

    return (
        <div className=''>
            {label && (
                <label htmlFor={name} className='text-lg text-white'>
                    {label}
                </label>
            )}
            {type === 'checkbox' ? (
                <input
                    id={name}
                    type={type}
                    checked={props.value}
                    onChange={(e) => props.setValue(e.target.checked)}
                    className={`mt-2 font-sans border-[2px] border-[#CCC] hover:border-custom-pink focus:border-custom-pink duration-300 transition-all rounded-[7px] outline-none text-[#667085] text-xl py-[7px] px-[12px] ${className}`}
                />
            ) : (
                <input
                    id={name}
                    type={type}
                    value={props.value}
                    placeholder={placeholder}
                    onChange={(e) => props.setValue(e.target.value)}
                    className={`mt-2 w-full font-sans border-[2px] border-[#CCC] hover:border-custom-pink focus:border-custom-pink duration-300 transition-all rounded-[7px] outline-none text-[#667085] text-xl py-[7px] px-[12px] ${className}`}
                />
            )}
        </div>
    );
};

export default Input;
