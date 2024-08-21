'use client';

//import { supabase } from '@/services';
import { User } from '@supabase/supabase-js';
import { supabaseClient } from '@/utils/supabase';
import { FC, ReactNode, createContext, useContext, useEffect, useState } from 'react';
import { STORAGE_KEY } from '../constants';
import { useLocalStorage } from '../hooks';

interface AuthProviderProps {
    children: ReactNode;
}

const AuthContext = createContext<{
    accessToken: string;
    isAuthenticated: boolean;
    user?: User;
}>({
    accessToken: '',
    isAuthenticated: false,
    user: undefined,
});

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
    const [user, setUser] = useState<User>();
    const [accessToken] = useLocalStorage(STORAGE_KEY.ACCESS_TOKEN, null);
    const isAuthenticated = !!accessToken;


    useEffect(() => {
        if (!accessToken) return;
        handleGetUserInfo();
    }, []);

    const handleGetUserInfo = async () => {
     try {
       const {
         data: { user },
       } = await supabaseClient.auth.getUser();


    setUser(user || undefined);
    } catch (error) {
      console.log(error);
    }
    };

    return (
        <AuthContext.Provider
            value={{
                isAuthenticated,
                accessToken,
                user,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};
