'use client';

import React, { useState } from 'react';

type CommonProps = {
    label?: string;
    additionalLabel?: string;
    name: string;
    className?: string;
    placeholder?: string;
    rows?: number;
};

type TextAreaInputProps = CommonProps & {
    value: string;
    setValue: (val: string) => void;
};

const TextArea: React.FC<TextAreaInputProps> = (props) => {
    const { label, additionalLabel, name, className = '', placeholder, rows = 3, value, setValue } = props;
    const [lineCount, setLineCount] = useState(rows);

    const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const text = e.target.value;
        setValue(text);
        setLineCount(text.split('\n').length);
    };

    return (
        <div className='mb-4'>
            <div>
                {label && (
                    <label htmlFor={name} className='text-lg text-white'>
                        {label}
                    </label>
                )}
            </div>
            <div>
                {additionalLabel && (
                    <label htmlFor={name} className='text-lg text-white'>
                        {additionalLabel}
                    </label>
                )}
            </div>
            <textarea
                id={name}
                value={value}
                placeholder={placeholder}
                onChange={handleInputChange}
                rows={rows}
                className={`mt-2 w-full font-sans border-[2px] border-[#CCC] hover:border-custom-pink focus:border-custom-pink duration-300 transition-all rounded-[7px] outline-none text-[#667085] text-xl py-[7px] px-[12px] ${className}`}
            />
          
        </div>
    );
};

export default TextArea;
