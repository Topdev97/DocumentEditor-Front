import type { Config } from 'tailwindcss';
const defaultTheme = require('tailwindcss/defaultTheme');

const spacing: { [x: number | string]: string } = {
  unset: 'unset',
};

for (let i = -100; i < 500; i += 0.5) {
  spacing[i] = `${i / 4}rem`;
}

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './containers/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/react-tailwindcss-datepicker/dist/index.esm.js',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        sans: ['DM Sans', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        bebas: ['"Bebas Neue"', 'cursive'],
        roboto: ['Roboto', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-background': 'linear-gradient(91deg, #06F 0.92%, #004DC0 100%)',
      },
      colors: {
        'custom-pink': '#7F56D9',
        'custom-bg-pink': '#F9F5FF',
        'custom-black-title': '#101828',
        'custom-black-text': '#475467',
        white: '#FFFFFF',
        black: {
          DEFAULT: '#000000',
          100: '#111827',
        },
        primary: {
          DEFAULT: '#F2F7FF',
          100: '#F2F7FF',
          200: '#BFD9FF',
          300: '#99C2FF',
          400: '#4D94FF',
          500: '#0066FF',
          600: '#004DBF',
          700: '#00327D',
          800: '#3787FF',
          900: '#0063F7',
          1000: '#E5F0FF',
        },
        red: {
          DEFAULT: '#FFF5F5',
          100: '#FFF5F5',
          200: '#FFE3E3',
          300: '#FF8787',
          400: '#FF6B6B',
          500: '#FA5252',
          600: '#F03E3E',
          700: '#C92A2A',
        },
        orange: {
          DEFAULT: '#FFF4E6',
          100: '#FFF4E6',
          200: '#FFE8CC',
          300: '#FFC078',
          400: '#FFA94D',
          500: '#FF922B',
          600: '#F76707',
          700: '#D9480F',
        },
        green: {
          DEFAULT: '#EBFBEE',
          100: '#EBFBEE',
          200: '#D3F9D8',
          300: '#8CE99A',
          400: '#69DB7C',
          500: '#51CF66',
          600: '#37B24D',
          700: '#2B8A3E',
        },
        gray: {
          DEFAULT: '#F8F9FA',
          100: '#F1F3F5',
          200: '#E9ECEF',
          300: '#DEE2E6',
          400: '#CED4DA',
          500: '#ADB5BD',
          600: '#868E96',
          700: '#495057',
          800: '#343A40',
          900: '#F8F9FA',
          1000: '#212529',
          1100: '#646F7C',
          1200: '#2C2126',
          1300: '#4C4448',
          1400: '#EDEDED',
          1500: '#D9D9D9',
          1600: '#AAAAAA',
        },
        blueGray: {
          700: '#62585D',
          800: '#4C4448',
          900: '#2C2126',
        },
        neutral: {
          200: '#E5E7EB',
          300: '#D1D5DB',
          900: '#111827',
        },
      },
    },
    fontSize: {
      xs: ['0.625rem', '12px'], // Smaller font size
      s: ['0.75rem', '14px'], // Smaller font size
      base: ['0.8125rem', '18px'], // Smaller font size
      l: ['0.875rem', '22px'], // Smaller font size
      xl: ['1rem', '26px'], // Smaller font size
      '2xl': ['1.125rem', '28px'], // Smaller font size
      '3xl': ['1.375rem', '30px'], // Smaller font size
      '4xl': '2.125rem', // 34px font size
      '5xl': '4rem', // 64px font size
    },
    boxShadow: {
      DEFAULT:
        '0px 1px 2px 0px rgba(0, 0, 0, 0.10), 0px 1px 1px 0px rgba(0, 0, 0, 0.06), 0px 0px 1px 0px rgba(0, 0, 0, 0.20)',
      xxs: '0px 6px 12px 0px rgba(0, 102, 255, 0.10);',
      xs: '0px 1px 1px 0px rgba(0, 0, 0, 0.05), 0px 0px 1px 0px rgba(0, 0, 0, 0.10)',
      s: '0px 1px 1px 0px rgba(0, 0, 0, 0.05), 0px 0px 1px 0px rgba(0, 0, 0, 0.40)',
      l: '0px 4px 3px 0px rgba(0, 0, 0, 0.07), 0px 2px 2px 0px rgba(0, 0, 0, 0.06), 0px 0px 1px 0px rgba(0, 0, 0, 0.20)',
      xl: '0px 10px 8px 0px rgba(0, 0, 0, 0.04), 0px 4px 3px 0px rgba(0, 0, 0, 0.10), 0px 0px 1px 0px rgba(0, 0, 0, 0.20)',
      '2xl':
        '0px 20px 13px 0px rgba(0, 0, 0, 0.03), 0px 8px 5px 0px rgba(0, 0, 0, 0.08), 0px 0px 1px 0px rgba(0, 0, 0, 0.20)',
      '3xl': '0px 25px 25px 0px rgba(0, 0, 0, 0.15), 0px 0px 1px 0px rgba(0, 0, 0, 0.20)',
      'search-box':
        '0px 16.66666603088379px 29.16666603088379px 0px rgba(0, 0, 0, 0.08), 0px 4.166666507720947px 8.333333015441895px 0px rgba(0, 0, 0, 0.08)',
      box: '0px 16.667px 29.167px 0px rgba(0, 0, 0, 0.08), 0px 4.167px 8.333px 0px rgba(0, 0, 0, 0.08)',
    },
    spacing,
    container: {
      center: true,
      screens: {
        sm: '650px',
        md: '768px',
        lg: '1024px',
        xl: '1196px',
      },
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '0rem',
      },
    },
  },
  plugins: [require('tailgrids/plugin')],
};
export default config;
