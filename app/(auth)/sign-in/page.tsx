'use client';

import dynamic from 'next/dynamic';

const SignIn = dynamic(() => import('@/containers/sign-in'), { ssr: false });

const SignInPage = () => {
    return <SignIn />;
};

export default SignInPage;
