'use client';

import dynamic from 'next/dynamic';

const Mentions = dynamic(() => import('@/containers/list/mentions'));

const Metionspage = () => {
    return <Mentions />;
};

export default Metionspage;
