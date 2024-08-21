'use client';

import { FC, ReactNode, createContext, useContext } from 'react';
import { STORAGE_KEY } from '../constants';
import { useLocalStorage } from '../hooks';

interface ThemeProviderProps {
    children: ReactNode;
}

const ThemeContext = createContext({
    darkMode: true,
    setDarkMode: (_darkMode: boolean) => { },
});

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
    const [darkMode, setDarkMode] = useLocalStorage(STORAGE_KEY.DARK_MODE, false);

    return (
        <ThemeContext.Provider
            value={{
                darkMode,
                setDarkMode,
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    return useContext(ThemeContext);
};
