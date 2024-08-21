'use client';

import { STORAGE_KEY } from '@/constants';
import { useLocalStorage } from '@/hooks';
import * as React from 'react';

interface IUserProviderProps {
    children: React.ReactNode;
}
interface IUserContext {
    userId: any
}

const UserContext = React.createContext<IUserContext>({} as IUserContext);

export const useUserContext = () => {
    const context = React.useContext(UserContext);
    if (!context) {
        throw new Error('AuthContext must be used within provider!');
    }
    return context;
};

const UserProvider: React.FunctionComponent<IUserProviderProps> = (props) => {
    const [userId] = useLocalStorage(STORAGE_KEY.USER_ID);
    return (
        <UserContext.Provider
            value={{ userId: userId }}
        >
            {props.children}
        </UserContext.Provider>
    );
};

export default UserProvider;
