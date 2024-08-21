'use client';

import dynamic from 'next/dynamic';

const NegativeKeywords = dynamic(() => import('@/containers/list/negative-keywords'));

const NegativeKeywordsPage = () => {
    return <NegativeKeywords />;
};

export default NegativeKeywordsPage;
