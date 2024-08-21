'use client';

import dynamic from 'next/dynamic';

const ResetPassword = dynamic(() => import('@/containers/reset-password'), { ssr: false });

const ResetPasswordPage = () => {
    return <ResetPassword />;
};

export default ResetPasswordPage;
