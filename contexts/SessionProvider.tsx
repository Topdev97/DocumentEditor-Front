'use client';

import { SessionProvider } from 'next-auth/react';

interface SessionContextProps {
    children: React.ReactNode;
}

export default function SessionContextProvider({ children }: SessionContextProps) {
    return (
        <SessionProvider >
            {children}
        </SessionProvider>
    );
}