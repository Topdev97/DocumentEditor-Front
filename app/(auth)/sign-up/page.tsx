'use client';

import dynamic from 'next/dynamic';

const SignUp = dynamic(() => import('@/containers/sign-up'), { ssr: false });

const SignUpPage = () => {
    return <SignUp />;
};

export default SignUpPage;
