'use client';

import dynamic from 'next/dynamic';

const Keywords = dynamic(() => import('@/containers/list/keywords'));

const KeywordsPage = () => {
    return <Keywords />;
};

export default KeywordsPage;
