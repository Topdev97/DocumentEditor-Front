'use client';

import { PATH } from '@/constants';
import { useAuth } from '@/contexts';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

export const withRestricted = (Component: React.FC<any>) => (props: any) => {
    const router = useRouter();
    const [isValidRoute, setIsValidRoute] = useState(false);
    const { isAuthenticated } = useAuth();

    useEffect(() => {
        handleCheckRedirect();
    }, [isAuthenticated]);

    const handleCheckRedirect = async () => {
        if (isAuthenticated) {
            setIsValidRoute(false);
            router.push(PATH.DASHBOARD);
        } else {
            setIsValidRoute(true);
        }
    };

    return isValidRoute ? <Component {...props} /> : null;
};
