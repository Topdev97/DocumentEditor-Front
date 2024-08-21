'use client';

import dynamic from 'next/dynamic';

const Settings = dynamic(() => import('@/containers/list/settings'));

const SettingsPage = () => {
    return <Settings />;
};

export default SettingsPage;
