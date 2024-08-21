import { PublicLayout } from '@/components/layouts/PublicLayout';
import * as React from 'react';

interface ILayoutProps {
    children: React.ReactNode;
}

const Layout: React.FunctionComponent<ILayoutProps> = ({ children }) => {
    return <PublicLayout>{children}</PublicLayout>;
};

export default Layout;
