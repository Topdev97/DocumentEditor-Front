'use client';

import dynamic from 'next/dynamic';

const Replies = dynamic(() => import('@/containers/list/replies'));

const RepliesPage = () => {
    return <Replies />;
};

export default RepliesPage;
