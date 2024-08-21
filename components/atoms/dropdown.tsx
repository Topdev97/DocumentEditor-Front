import React, { useEffect, useRef, useState, RefObject } from "react";

type Handler = () => void;

const useClickOutside = (handler: Handler): RefObject<HTMLDivElement> => {
  const domNode = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const maybeHandler = (event: MouseEvent) => {
      if (domNode.current && !domNode.current.contains(event.target as Node)) {
        handler();
      }
    };

    document.addEventListener("mousedown", maybeHandler);

    return () => {
      document.removeEventListener("mousedown", maybeHandler);
    };
  }, [handler]);

  return domNode;
};

type DropdownType = {
  className?: string;
  labelIcon?: React.ReactNode;
  labelText?: string;
  value: any;
  setValue: (val: any) => void;
  options: {
    value: any;
    label: any;
  }[]
}

const Dropdown = ({ className, labelIcon, labelText, value, setValue, options }: DropdownType) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const domNode = useClickOutside(() => {
    setDropdownOpen(false);
  });

  const isOptionSelected = (optionValue: any) => {
    return value.includes(optionValue);
  };

  const handleCheckboxChange = (optionValue: any) => {
    if (isOptionSelected(optionValue)) {
      setValue(value.filter(v => v !== optionValue));
    } else {
      setValue([...value, optionValue]);
    }
  };

  const getSelectedLabels = () => {
    if (!options.length) return labelText;
    if (!value.length) return labelText;
    const selected = options.filter(option => value.includes(option.value));
    return selected.map(option => option.label).join(", ");
  };

  return (
    <div className={`text-custom-black-title ${className} `}>
      <div className="flex flex-wrap ">
        <div ref={domNode} className="w-full">
          <div className="text-center">
            <div className="relative inline-block text-left w-full">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className={`hover:border-custom-pink focus:border-custom-pink duration-300 transition-all flex items-center px-5 py-3 text-base font-medium gap-1 text-custom-black-title border-2 border-[#CCC] rounded-lg w-full relative`}
              >
                {labelIcon}
                {
                  labelText == 'Country' ? "Country" : <span>{getSelectedLabels()}</span>
                }

                <span className="absolute top-1/2 -translate-y-1/2 right-2">
                  <svg
                    width={20}
                    height={20}
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`fill-current ${dropdownOpen ? "rotate-180" : ""} transition-all duration-300`}
                  >
                    <path d="M10 14.25C9.8125 14.25 9.65625 14.1875 9.5 14.0625L2.3125 7C2.03125 6.71875 2.03125 6.28125 2.3125 6C2.59375 5.71875 3.03125 5.71875 3.3125 6L10 12.5312L16.6875 5.9375C16.9688 5.65625 17.4063 5.65625 17.6875 5.9375C17.9687 6.21875 17.9687 6.65625 17.6875 6.9375L10.5 14C10.3437 14.1563 10.1875 14.25 10 14.25Z" />
                  </svg>
                </span>
              </button>
              <div
                className={`shadow-1 absolute left-0 max-h-[300px] overflow-auto  z-40 mt-2 w-full rounded-md bg-white py-[10px] transition-all ${dropdownOpen
                  ? "top-full opacity-100 visible"
                  : "top-[110%] invisible opacity-0"
                  }`}
              >
                {
                  options.map((item, idx) => (
                    <label key={idx} className="flex items-center text-custom-black hover:font-semibold px-5 py-2 text-base transition-all duration-300 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={isOptionSelected(item.value)}
                        onChange={() => handleCheckboxChange(item.value)}
                        className="mr-2"
                      />
                      {item.label}
                    </label>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;