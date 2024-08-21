import { FC, TextareaHTMLAttributes, useEffect, useRef } from 'react';

interface InputProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  label?: string;
  value: string;
  setValue: (val: string) => void;
}

const Input: FC<InputProps> = ({ name, label, value, setValue, className, ...rest }) => {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  return (
    <div className={`flex flex-col ${className}`}>
      {label && <label htmlFor={name} className="font-bold text-sm">{label}</label>}
      <textarea
        id={name}
        name={name}
        value={value}
        onChange={handleChange}
        ref={textareaRef}
        className="resize-none overflow-hidden rounded border border-gray-300 px-3 py-2 text-sm mt-2"
        rows={1} // Explicitly set rows to 1
        {...rest}
      />
    </div>
  );
};

export default Input;
