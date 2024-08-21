'use client';

import dynamic from 'next/dynamic';

const SetPassword = dynamic(() => import('@/containers/set-password'), { ssr: false });

const SetPasswordPage = () => {
    return <SetPassword />;
};

export default SetPasswordPage;
