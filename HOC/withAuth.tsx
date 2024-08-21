'use client';

import { PATH } from '@/constants';
import { useAuth } from '@/contexts';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

export const withAuth = (Component: React.FC<any>) => (props: any) => {
    const router = useRouter();
    const [isValidRoute, setIsValidRoute] = useState(false);
    const { isAuthenticated } = useAuth();

    useEffect(() => {
        if (isAuthenticated) {
            setIsValidRoute(true);
        } else {
            router.push(PATH.HOME);
        }
    }, []);

    return isValidRoute ? <Component {...props} /> : null;
};
