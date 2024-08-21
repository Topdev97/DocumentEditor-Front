'use client';

import { withAuth } from '@/HOC/withAuth';
import { ProtectedLayout } from '@/components/layouts/ProtectedLayout';
import * as React from 'react';

interface ILayoutProps {
    children: React.ReactNode;
}

const Layout: React.FunctionComponent<ILayoutProps> = ({ children }) => {
    return <ProtectedLayout>{children}</ProtectedLayout>;
};

export default withAuth(Layout);
