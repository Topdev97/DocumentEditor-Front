'use client';

import dynamic from 'next/dynamic';

const Offers = dynamic(() => import('@/containers/list/offers'));

const OffersPage = () => {
    return <Offers />;
};

export default OffersPage;
