// components/RoundRadioSelect.tsx

import React from 'react';

interface RoundRadioSelectProps {
  options: string[];
  selectedOption: string;
  className?: string;
  onChange: (value: string) => void;
}

const RoundRadioSelect: React.FC<RoundRadioSelectProps> = ({ options, selectedOption, onChange, className = '' }) => {
  return (
    <div className={`space-y-4, ${className}`}>
      {options.map((option) => (
        <label key={option} className="flex items-center">
          <input
            type="radio"
            value={option}
            checked={option === selectedOption}
            onChange={(e) => onChange(e.target.value)}
            className={`form-radio rounded-full text-blue-600 h-5 w-5`}
          />
          <span className="ml-2">{option}</span>
        </label>
      ))}
    </div>
  );
};

export default RoundRadioSelect;
