import clsx from 'clsx';
import { FC, ReactNode } from 'react';

type AlertVariant = 'success' | 'info' | 'error';

interface IAlertProps {
  variant?: AlertVariant;
  label: ReactNode;
}

const Alert: FC<IAlertProps> = ({ label, variant }) => {
  return (
    <div
      className={clsx(
        'px-4 py-2 rounded-xl text-gray-700 text-base flex items-center w-fit shadow-l bg-white',
      )}
    >
      {variant === 'success' && (
        <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g opacity="0.3">
            <path d="M6 19C6 11.8203 11.8203 6 19 6C26.1797 6 32 11.8203 32 19C32 26.1797 26.1797 32 19 32C11.8203 32 6 26.1797 6 19Z" stroke="#079455" stroke-width="2" />
          </g>
          <g opacity="0.1">
            <path d="M1 19C1 9.05888 9.05888 1 19 1C28.9411 1 37 9.05888 37 19C37 28.9411 28.9411 37 19 37C9.05888 37 1 28.9411 1 19Z" stroke="#079455" stroke-width="2" />
          </g>
          <g clip-path="url(#clip0_22349_905)">
            <path d="M15.2503 19L17.7503 21.5L22.7503 16.5M27.3337 19C27.3337 23.6023 23.6027 27.3333 19.0003 27.3333C14.398 27.3333 10.667 23.6023 10.667 19C10.667 14.3976 14.398 10.6666 19.0003 10.6666C23.6027 10.6666 27.3337 14.3976 27.3337 19Z" stroke="#079455" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
          </g>
          <defs>
            <clipPath id="clip0_22349_905">
              <rect width="20" height="20" fill="white" transform="translate(9 9)" />
            </clipPath>
          </defs>
        </svg>
      )}

      {variant === 'error' && (
        <svg width="38" height="38" viewBox="0 0 38 38" fill="red" xmlns="http://www.w3.org/2000/svg">
          <g opacity="0.3">
            <path d="M6 19C6 11.8203 11.8203 6 19 6C26.1797 6 32 11.8203 32 19C32 26.1797 26.1797 32 19 32C11.8203 32 6 26.1797 6 19Z" stroke="#079455" stroke-width="2" />
          </g>
          <g opacity="0.1">
            <path d="M1 19C1 9.05888 9.05888 1 19 1C28.9411 1 37 9.05888 37 19C37 28.9411 28.9411 37 19 37C9.05888 37 1 28.9411 1 19Z" stroke="#079455" stroke-width="2" />
          </g>
          <defs>
            <clipPath id="clip0_22349_905">
              <rect width="20" height="20" fill="white" transform="translate(9 9)" />
            </clipPath>
          </defs>
        </svg>
      )}

      {variant === 'error' ? <div className="ml-2 pr-5 font-[600] textl-2xl text-[red]">{label}</div> : <div className="ml-2 pr-5 font-[600] textl-2xl">{label}</div>}
    </div>
  );
};

export default Alert;
